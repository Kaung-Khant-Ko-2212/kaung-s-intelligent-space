import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  Sphere, 
  MeshDistortMaterial, 
  Float, 
  Sparkles 
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// 1. The "Brain" - Smaller and different color
const NeuralCore = ({ scale = 1 }: { scale?: number }) => {
  return (
    <group scale={scale}>
      {/* Inner Core - Smaller size, deeper color */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.2}>
        {/* Radius changed from 1 to 0.8 */}
        <Sphere args={[0.8, 64, 64]}>
          <MeshDistortMaterial
            color="#000000"
            // Changed color to a deep AI blue
            emissive="#0040ff" 
            emissiveIntensity={1} 
            roughness={0.1}
            metalness={1}
            distort={0.3}
            speed={3}
          />
        </Sphere>
      </Float>

      {/* Outer Grid - Adjusted scale to match new core size */}
      <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
        <mesh scale={[1.2, 1.2, 1.2]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial 
            color="#4D8BFF" // Slightly lighter blue wireframe
            wireframe 
            transparent 
            opacity={0.2} 
          />
        </mesh>
      </Float>
    </group>
  );
};

// 2. Electron (Unchanged logic, just used differently below)
const Electron = ({ radius, speed, color, rotation, scale = 1 }: { radius: number; speed: number; color: string; rotation: [number, number, number]; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * radius * scale;
      ref.current.position.z = Math.cos(t) * radius * scale;
    }
  });

  return (
    <group rotation={rotation} scale={scale}>
      {/* Orbit Path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      {/* Particle */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color={color} toneMapped={false} transparent blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
};

// 3. Nodes - TEXT REMOVED
const DataNode = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <group position={[position[0] * scale, position[1] * scale, position[2] * scale]} scale={scale}>
          <mesh>
            <octahedronGeometry args={[0.15]} /> {/* Slightly smaller nodes */}
            <meshStandardMaterial 
                color="#1a1a1a" 
                emissive="#4D8BFF" 
                emissiveIntensity={2} 
                toneMapped={false} 
            />
          </mesh>
           {/* <Html> TAG REMOVED HERE */}
        </group>
    </Float>
  );
};

const Scene3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Responsive scaling: smaller on mobile
  const sceneScale = isMobile ? 0.6 : 1;
  const cameraDistance = isMobile ? 4 : 5;
  const cameraFov = isMobile ? 60 : 50;
  const sparklesCount = isMobile ? 30 : 60;
  const sparklesScale = isMobile ? 4 : 6;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, cameraDistance], fov: cameraFov }}
        gl={{ alpha: true, antialias: true }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile for performance
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4D8BFF" />
        
        <group scale={sceneScale}>
            <NeuralCore scale={1} />
            
            {/* Tightened the radii slightly to match the smaller core */}
            <Electron radius={1.5} speed={1.5} color="#00ffff" rotation={[Math.PI / 3, 0, 0]} scale={1} />
            <Electron radius={2.0} speed={1} color="#ff00ff" rotation={[0, Math.PI / 3, 0]} scale={1} />
            <Electron radius={1.2} speed={-1.8} color="#00ff00" rotation={[Math.PI / 2, 0, Math.PI / 4]} scale={1} />

            <DataNode position={[2.5, 1, 0]} scale={1} />
            <DataNode position={[-1.8, -1.5, 0.5]} scale={1} />
        </group>

        <Sparkles 
          count={sparklesCount} 
          scale={sparklesScale} 
          size={isMobile ? 1.5 : 2} 
          speed={0.4} 
          opacity={0.4} 
          color="#4D8BFF" 
          noise={0.2}
        />

        <EffectComposer enabled={true}>
          <Bloom 
            luminanceThreshold={1.1}
            mipmapBlur 
            intensity={isMobile ? 0.4 : 0.6} // Reduced bloom on mobile for performance
            radius={0.5}
          />
        </EffectComposer>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;