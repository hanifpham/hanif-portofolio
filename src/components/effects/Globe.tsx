import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "motion/react";

function GlobeSphere() {
  const texture = useTexture("/images/earth-specular.jpg");

  const shaderArgs = useMemo(() => ({
    uniforms: {
      tDiffuse: { value: texture },
      colorOcean: { value: new THREE.Color("#060b19") }, 
      colorLand: { value: new THREE.Color("#1e3a8a") }, 
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform vec3 colorOcean;
      uniform vec3 colorLand;
      varying vec2 vUv;
      void main() {
        vec4 texel = texture2D(tDiffuse, vUv);
        // In the specular map, ocean is white (1.0), land is black (0.0)
        vec3 finalColor = mix(colorLand, colorOcean, texel.r); 
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `
  }), [texture]);

  return (
    <group>
      {/* Solid Globe */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial args={[shaderArgs]} />
      </mesh>
      
      {/* Thin Latitude/Longitude Grid Lines */}
      <mesh>
        <sphereGeometry args={[1.005, 32, 16]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
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
        float intensity = pow(0.65 - dot(vNormal, vec3(0, 0, 1.0)), 4.0);
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
      <AtmosphereGlow />
    </group>
  );
}

export function Globe() {
  return (
    <div 
      className="w-65 sm:w-80 md:w-95 lg:w-115 aspect-square relative flex items-center justify-center mx-auto lg:ml-auto"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <InteractiveGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
