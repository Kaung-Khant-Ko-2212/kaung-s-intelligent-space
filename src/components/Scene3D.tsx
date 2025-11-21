import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingGeometry = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[0.5, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const AINode = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#4FC3F7"
          emissive="#2196F3"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#2196F3" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9C27B0" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} color="#00BCD4" />

        {/* Central large sphere */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#2196F3"
              attach="material"
              distort={0.6}
              speed={1.5}
              roughness={0.1}
              metalness={0.9}
              emissive="#1976D2"
              emissiveIntensity={0.4}
              transparent
              opacity={0.7}
            />
          </Sphere>
        </Float>

        {/* Floating geometries */}
        <FloatingGeometry position={[-2, 1, -1]} color="#9C27B0" />
        <FloatingGeometry position={[2, -1, -2]} color="#00BCD4" />
        <FloatingGeometry position={[-1.5, -1.5, 1]} color="#2196F3" />
        <FloatingGeometry position={[1.8, 1.2, 0.5]} color="#7C4DFF" />

        {/* AI Nodes */}
        <AINode position={[-3, 2, -1]} />
        <AINode position={[3, -2, -1.5]} />
        <AINode position={[0, 2.5, -2]} />
        <AINode position={[-2.5, -1, 1]} />
        <AINode position={[2.2, 1.5, -0.5]} />

        {/* Rings */}
        <Float speed={0.5} rotationIntensity={2} floatIntensity={0.5}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2, 0.05, 16, 100]} />
            <meshStandardMaterial
              color="#00BCD4"
              emissive="#0097A7"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;
