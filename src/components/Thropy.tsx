import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

const Stars = () => {
  const { scene, animations } = useGLTF('assets/sun.glb'); // Load the model and animations
  const starsRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0 && scene) {
      // Create an AnimationMixer and play the first animation
      mixer.current = new AnimationMixer(scene);

      // Play the first animation in the GLB file
      const action = mixer.current.clipAction(animations[0]);

      action.setEffectiveTimeScale(1); // Slow down the animation (0.5 is half-speed, adjust as needed)
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

  return <primitive object={scene} ref={starsRef} position={[0, 0, 0]} scale={[2, 2, 2]} rotation={[0, Math.PI, 0 ]} />;
};
const ThrophyScene = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%', borderRadius: 12 }} gl={{ alpha: false }} camera={{ position: [3, 0.6, 0], fov: 60 }} >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 5, 0]} intensity={2} color="#FF0011" />
      <Stars />
    </Canvas>
  );
};

export default ThrophyScene;
