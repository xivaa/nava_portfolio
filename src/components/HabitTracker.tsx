import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Phone = () => {
    const phoneRef = useRef();
    const { scene } = useGLTF('assets/iphone.glb');
    const screenTexture = useTexture('assets/ht2.png'); 
    
    const screenPosition = [0, 0 , 0.06];  // Adjust this for screen position relative to the phone
    const screenScale = [0.84, 1.1, 1];    // Adjust for size and scale

    useEffect(() => {
        if (phoneRef.current) {
          gsap.fromTo(
            phoneRef.current.rotation, 
            { y: 1, z: 0.1 }, // Initial rotation
            { y: 0, z: 0, duration: 1.5, ease: "power2.out" } // Target rotation
          );
        }
        return () => {
            phoneRef.current?.geometry?.dispose();
            phoneRef.current?.material?.dispose();
        };
      }, []);
  
    return (
      <group ref={phoneRef}>  
        <primitive object={scene} position={[0, 0, 0]} scale={[2, 2, 2]} rotation={[0, Math.PI, 0]} />
        <mesh position={screenPosition} scale={screenScale}>
          <planeGeometry args={[1, 1.5]} /> 
          <meshBasicMaterial map={screenTexture} />
        </mesh>
      </group>
    );
  };

  
  const HabitTracker = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1.8], fov: 70 }}>  {/* Adjust camera position */}
            <ambientLight intensity={2} />
            <directionalLight position={[1, -1, 1]} intensity={1.6} />
            <directionalLight position={[0, 0, 1]} intensity={1.6} />
            <directionalLight position={[0, 0, -1]} intensity={1.6} />
            <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
            <Phone /> 
        </Canvas>
    )
  }
  
  export default HabitTracker;
