import React, { useRef } from "react";
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
const NeuralCore = () => {
  return (
    <group>
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
const Electron = ({ radius, speed, color, rotation }: { radius: number; speed: number; color: string; rotation: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.sin(t) * radius;
      ref.current.position.z = Math.cos(t) * radius;
    }
  });

  return (
    <group rotation={rotation}>
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
const DataNode = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <group position={position}>
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
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#4D8BFF" />
        
        <group>
            <NeuralCore />
            
            {/* Tightened the radii slightly to match the smaller core */}
            <Electron radius={1.5} speed={1.5} color="#00ffff" rotation={[Math.PI / 3, 0, 0]} />
            <Electron radius={2.0} speed={1} color="#ff00ff" rotation={[0, Math.PI / 3, 0]} />
            <Electron radius={1.2} speed={-1.8} color="#00ff00" rotation={[Math.PI / 2, 0, Math.PI / 4]} />

            <DataNode position={[2.5, 1, 0]} />
            <DataNode position={[-1.8, -1.5, 0.5]} />
        </group>

        <Sparkles count={60} scale={6} size={2} speed={0.4} opacity={0.4} color="#4D8BFF" noise={0.2}/>

        <EffectComposer enabled={true}>
          <Bloom 
            luminanceThreshold={1.1}
            mipmapBlur 
            intensity={0.6} // Slightly reduced bloom intensity
            radius={0.5}
          />
        </EffectComposer>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;