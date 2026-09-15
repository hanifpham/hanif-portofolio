import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let currentGlobe: any = null;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    currentGlobe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2 || 1000,
      height: width * 2 || 1000,
      phi: 0,
      theta: 0.1,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1], // Putih agar dot peta terlihat jelas
      markerColor: [0.1, 0.8, 1], // Cyan
      glowColor: [1, 1, 1], // Glow putih bersinar
      markers: [
        { location: [-6.2088, 106.8456], size: 0.1 } // Jakarta
      ],
      // @ts-expect-error onRender might not be fully typed
      onRender: (state: any) => {
        if (!pointerInteracting.current && !shouldReduceMotion) {
          phi += 0.005;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    return () => {
      if (currentGlobe) currentGlobe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="w-full max-w-125 aspect-square relative flex items-center justify-center mx-auto lg:ml-auto">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            pointerInteracting.current = e.clientX - delta;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            pointerInteracting.current = e.touches[0].clientX - delta;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 1,
        }}
      />
    </div>
  );
}
