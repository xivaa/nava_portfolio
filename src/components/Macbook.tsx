import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Macbook = () => {
    const macbookRef = useRef(null);
    const { scene } = useGLTF('assets/mac.glb');

    useEffect(() => {
        if (macbookRef.current) {
          // GSAP animation for the phone model to rotate slightly on the X and Z axis upon appearance
          gsap.fromTo(
            macbookRef.current.rotation, 
            { y: 0, z: 0.5 }, // Initial rotation
            { y: 1.4, z: 0,  duration: 1.5, ease: "power2.out" } // Target rotation
          );
        }
        return () => {
            macbookRef.current?.geometry?.dispose();
            macbookRef.current?.material?.dispose();
        };
      }, []);

    return <primitive object={scene} ref={macbookRef} position={[0, -0.2, 0]} scale={[3, 3, 3]} rotation={[0.3, Math.PI / 2, 0]} />;
}

const MacbookScene = () => {
  return (
    <Canvas camera={{ position: [0, 0.5, 1.5], fov: 80 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[1, -1, 1]} intensity={1.6} />
        <directionalLight position={[0, 2, 1]} intensity={1.6} />
        <directionalLight position={[0, 0, -1]} intensity={1.6} />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <Macbook />
    </Canvas>
  )
}

export default MacbookScene;


