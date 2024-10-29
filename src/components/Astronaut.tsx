import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { AnimationMixer, MathUtils } from 'three';

const Alien = () => {
    const alienRef = useRef();
    const { scene, animations } = useGLTF('assets/dancing_alien.glb');
    const mixer = useRef();

    useEffect(() => {
        if (animations && animations.length > 0 && scene) {
          // Create an AnimationMixer and play the first animation
          mixer.current = new AnimationMixer(scene);
    
          // Play the first animation in the GLB file
          const action = mixer.current.clipAction(animations[0]);
    
          action.setEffectiveTimeScale(0.6); // Slow down the animation (0.5 is half-speed, adjust as needed)
          action.play();
        }
    
        return () => {
          // Cleanup the mixer when the component unmounts
          if (mixer.current) {
            mixer.current.stopAllAction();
            mixer.current = null;
          }
        };
      }, [animations, scene]);
    
      // Update the mixer in each frame to advance the animation
      useFrame((state, delta) => {
        if (mixer.current) {
          mixer.current.update(delta);
        }
      });
    return <primitive object={scene} position={[-0.6, -1, 0]} ref={alienRef} scale={[1, 1, 1]} />;
}

const Astronaut = () => {
  const astronautRef = useRef();
  const { scene, animations } = useGLTF('assets/astronaut.glb'); 
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0 && scene) {
      // Create an AnimationMixer and play the first animation
      mixer.current = new AnimationMixer(scene);

      // Play the first animation in the GLB file
      const action = mixer.current.clipAction(animations[0]);

      action.setEffectiveTimeScale(0.6); // Slow down the animation (0.5 is half-speed, adjust as needed)
      action.play();
    }

    return () => {
      // Cleanup the mixer when the component unmounts
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [animations, scene]);

  // Update the mixer in each frame to advance the animation
  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} position={[0.5, -1, 0]} ref={astronautRef} scale={[1, 1, 1]} />;
};


const SpaceShip = () => {
    const spaceshipRef = useRef();
    const { scene, animations } = useGLTF('assets/hypno.glb');
    const mixer = useRef();
    const targetRotation = MathUtils.degToRad(90); 
    const rotationSpeed = 0.2; 
    const [direction, setDirection] = useState(1);
  
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
      if (spaceshipRef.current) {
        // Update rotation based on direction
        spaceshipRef.current.rotation.y += rotationSpeed * delta * direction;
  
        // If rotation exceeds 90 degrees, reverse direction
        if (spaceshipRef.current.rotation.y >= targetRotation) {
          setDirection(-1); // Bounce back to the start
        }
        // If rotation goes back to 0 degrees, reverse direction again
        else if (spaceshipRef.current.rotation.y <= 0) {
          setDirection(1); // Rotate forward again
        }
      }
    });
  
    return <primitive object={scene} ref={spaceshipRef} position={[0, -1.2, 0]} scale={[0.4, 0.4, 0.4]} />;
  }
  

export const AstronautScene = () => {
  return (
    <Canvas camera={{ position: [2, 1, 3 ], fov: 70 }}>
        {/* Lights for better visibility */}
        <ambientLight intensity={1} />
        <directionalLight position={[1, -1, 1]} intensity={1.6} />
        <directionalLight position={[0, 0, 1]} intensity={1.6} />
        <directionalLight position={[0, 0, -1]} intensity={1.6} />
        {/* <Astronaut />
        <Alien />  */}
        <SpaceShip />
    </Canvas>
  );
};

export default AstronautScene;
