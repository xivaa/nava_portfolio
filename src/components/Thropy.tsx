import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { AnimationMixer } from 'three';

const Stars = () => {
  const { scene, animations } = useGLTF('assets/sun.glb'); 
  const starsRef = useRef();
  const mixer = useRef<AnimationMixer | null>();

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

  useFrame(( _,delta) => {
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
