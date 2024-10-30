import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { AnimationMixer, MathUtils, Group } from 'three';

const Head = () => {
  const spaceshipRef = useRef<Group>(null);
  const { scene, animations } = useGLTF('assets/hypno.glb');
  const mixer = useRef<AnimationMixer | null>(null);
  const targetRotation = MathUtils.degToRad(90);
  const rotationSpeed = 0.2;
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.setEffectiveTimeScale(1);
      action.play();
    }

    return () => {
      mixer.current?.stopAllAction();
      mixer.current = null;
    };
  }, [animations, scene]);

  useFrame((_, delta) => {
    if (mixer.current) mixer.current.update(delta);

    if (spaceshipRef.current) {
      spaceshipRef.current.rotation.y += rotationSpeed * delta * direction;

      if (spaceshipRef.current.rotation.y >= targetRotation) {
        setDirection(-1);
      } else if (spaceshipRef.current.rotation.y <= 0) {
        setDirection(1);
      }
    }
  });

  return <primitive object={scene} ref={spaceshipRef} position={[0, -1.2, 0]} scale={[0.4, 0.4, 0.4]} />;
};

export const AstronautScene = () => (
  <Canvas camera={{ position: [2, 1, 3], fov: 70 }}>
    <ambientLight intensity={1} />
    <directionalLight position={[1, -1, 1]} intensity={1.6} />
    <directionalLight position={[0, 0, 1]} intensity={1.6} />
    <directionalLight position={[0, 0, -1]} intensity={1.6} />
    <Head />
  </Canvas>
);

export default AstronautScene;
