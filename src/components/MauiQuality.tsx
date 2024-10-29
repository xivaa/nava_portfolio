import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Phone = () => {
    const phoneRef = useRef();
    const { scene } = useGLTF('assets/iphone.glb');
    const screenTexture = useTexture('assets/mqc.JPG'); 
    
    const screenPosition = [0, -0.05, 0.06]; 
    const screenScale = [0.84, 1.1, 1];    

    useEffect(() => {
        if (phoneRef.current) {
          // GSAP animation for the phone model to rotate slightly on the X and Z axis upon appearance
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
      <group  ref={phoneRef}>
        <primitive object={scene} position={[0, 0, 0]} scale={[2, 2, 2]} rotation={[0, Math.PI, 0]}/>
        <mesh position={screenPosition} scale={screenScale}>
          <planeGeometry args={[1, 1.6]} /> 
          <meshBasicMaterial map={screenTexture} />
        </mesh>
      </group>
    );
  };

  

const MauiQuality = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1.8], fov: 70 }}> 
            <ambientLight intensity={2} />
            <directionalLight position={[1, -1, 1]} intensity={1.6} />
            <directionalLight position={[0, 0, 1]} intensity={1.6} />
            <directionalLight position={[0, 0, -1]} intensity={1.6} />
            <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
            <Phone /> 
        </Canvas>
  )
}

export default MauiQuality;