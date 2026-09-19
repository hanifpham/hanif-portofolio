import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

function GlobeSphere() {
  const colorMap = useTexture("/images/earth-map.jpg");
  colorMap.colorSpace = THREE.SRGBColorSpace;

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        map={colorMap} 
        color="#ffffff"
        roughness={0.85}
        metalness={0}
      />
    </mesh>
  );
}

function AtmosphereGlow() {
  const shaderArgs = useMemo(() => ({
    uniforms: {
      color1: { value: new THREE.Color("#3b82f6") }, // Blue
      color2: { value: new THREE.Color("#8b5cf6") }, // Violet
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vNormal;
      void main() {
        // Use max to prevent negative values in pow()
        float intensity = pow(max(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 0.0), 3.0) * 0.18;
        // Mix colors based on Y normal for a subtle gradient glow
        vec3 glowColor = mix(color1, color2, vNormal.y * 0.5 + 0.5);
        gl_FragColor = vec4(glowColor, 1.0) * intensity;
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false
  }), []);

  return (
    <mesh>
      <sphereGeometry args={[1.2, 64, 64]} />
      <shaderMaterial args={[shaderArgs]} />
    </mesh>
  );
}

function CloudLayer() {
  const cloudTexture = useTexture("/images/earth-clouds.png");
  const cloudRef = useRef<THREE.Mesh>(null);
  const shouldReduceMotion = useReducedMotion();
  
  cloudTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (cloudRef.current && !shouldReduceMotion) {
      cloudRef.current.rotation.y += delta * 0.025;
    }
  });

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[1.015, 64, 64]} />
      <meshStandardMaterial 
        map={cloudTexture} 
        transparent 
        opacity={0.38} 
        blending={THREE.NormalBlending}
        depthWrite={false}
        color="#ffffff"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function InteractiveGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const shouldReduceMotion = useReducedMotion();
  const { mouse } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!shouldReduceMotion) {
      // Auto rotation - very slow (approx 40s per revolution)
      groupRef.current.rotation.y += delta * 0.15;
      
      // Subtle mouse interaction (parallax)
      targetRotation.current.x = (mouse.y * Math.PI) / 10;
      targetRotation.current.y = (mouse.x * Math.PI) / 10;
      
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
      // We do not clamp y completely to mouse, letting it rotate continuously 
    }
  });

  return (
    <group ref={groupRef}>
      <GlobeSphere />
      <CloudLayer />
      <AtmosphereGlow />
    </group>
  );
}

export function Globe() {
  return (
    <div 
      className="w-72 sm:w-80 md:w-110 lg:w-140 xl:w-170 aspect-square relative flex items-center justify-center mx-auto lg:ml-auto"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.35} />
        <hemisphereLight args={["#dbeafe", "#020617", 0.35]} />
        <directionalLight position={[5, 3, 5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-4, 2, -4]} intensity={0.45} color="#8b5cf6" />
        <Suspense fallback={null}>
          <InteractiveGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
