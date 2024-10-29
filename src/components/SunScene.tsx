import { OrbitControls, useGLTF, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AnimationMixer } from "three";

const Sun = () => {
    const sunRef = useRef();
    const { scene, animations } = useGLTF('assets/camp.glb');
    const mixer = useRef();
  
    useEffect(() => {
        if (animations && animations.length > 0 && scene) {
            mixer.current = new AnimationMixer(scene);
            const action = mixer.current.clipAction(animations[0]);
            action.setEffectiveTimeScale(1); 
            action.play();
        }
  
        return () => {
            if (mixer.current) {
                mixer.current.stopAllAction();
                mixer.current = null;
            }
        };
    }, [animations, scene]);
  
    useFrame((state, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });
  
    return <primitive object={scene} ref={sunRef} position={[0, -1.5, 0]} scale={[1, 1, 1]} />;
};

const SunScene = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 780 && window.innerWidth > 351);
    const [isWatch, setIsWatch] = useState(window.innerWidth < 351);
  
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 780 && window.innerWidth > 350);
            setIsWatch(window.innerWidth < 351);
        };
        
        window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>
        <ambientLight intensity={2.1}/>
        <directionalLight position={[1, 3, 0]} intensity={2.1} color="#FF5C00" />
        <directionalLight position={[4, 2, 2]} intensity={1.2} color="#4D4DFF" />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Sun />
        {isMobile ? (
          <>
            <Text position={[0, 2, 0]} fontSize={0.5} color="#7dcf89" anchorX="center" anchorY="middle">
              Hey, I'm Alfonso
            </Text>
            <Text position={[0, 1.4, 0]} fontSize={0.18} color="#ffffff" anchorX="center" anchorY="middle">
              using the most disruptive technologies
            </Text>
            <Text position={[0, 1.2, 0]} fontSize={0.18} color="#ffffff" anchorX="center" anchorY="middle">
              I create digital solutions for real life problems
            </Text>
          </>
        ) : isWatch ? (
            null
        ) : (
          <>
            <Text position={[0, 2.4, 0]} fontSize={1} color="#7dcf89" anchorX="center" anchorY="middle">
              Hey, I'm Alfonso
            </Text>
            <Text position={[0, 1.4, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
              using the most disruptive technologies
            </Text>
            <Text position={[0, 1, 0]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle">
              I create digital solutions for real life problems
            </Text>
          </>
        )}
      </Canvas>
    );
  };
  
  export default SunScene;
