import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CanvasScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#915EFF" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
