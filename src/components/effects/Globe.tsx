import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let phi = 0;
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600, // 300px * 2
      height: 600,
      phi: 0,
      theta: 0.1,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.15],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.05, 0.1, 0.2],
      markers: [
        { location: [-6.2088, 106.8456], size: 0.1 }
      ],
      // @ts-expect-error onRender might not be fully typed
      onRender: (state: any) => {
        if (!shouldReduceMotion) {
          state.phi = phi;
          phi += 0.005;
        }
      }
    });

    return () => {
      globe.destroy();
    };
  }, [shouldReduceMotion]);

  return (
    <div style={{ width: 300, height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: 300,
          height: 300,
          display: "block",
        }}
      />
    </div>
  );
}
