import { useGLTF, OrbitControls, useTexture, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Group, Mesh } from "three";

const Macbook = () => {
    const macbookRef = useRef<Group>(null);
    const { scene } = useGLTF('assets/mac.glb');
    const screenTexture = useTexture('assets/portfolio.png');
    const screenPosition: [number, number, number] = [0.37, 0.21, 0];
    const screenScale: [number, number, number] = [0.6, 0.6, 0.6];

    useEffect(() => {
        if (macbookRef.current) {
            gsap.fromTo(
                macbookRef.current.rotation,
                { y: 0, z: 0.5 },
                { y: 2.4, z: 0, duration: 1.5, ease: "power2.out" }
            );
        }

        return () => {
            macbookRef.current?.traverse((child) => {
                if ((child as Mesh).isMesh) {
                    const mesh = child as Mesh;
                    mesh.geometry.dispose();
                    if (Array.isArray(mesh.material)) {
                        mesh.material.forEach((material) => material.dispose());
                    } else {
                        mesh.material.dispose();
                    }
                }
            });
        };
    }, [scene]);

    return (
        <group ref={macbookRef}>
            <primitive object={scene} position={[0, -0.2, 0]} scale={[3, 3, 3]} />
            <mesh position={screenPosition} scale={screenScale} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[1.6, 0.9]} />
                <meshBasicMaterial map={screenTexture} />
            </mesh>
        </group>
    );
};

const MacbookScene = () => {
    return (
        <Canvas camera={{ position: [1, -0.2, 1], fov: 80 }}>
            <ambientLight intensity={6} />
            <directionalLight position={[1, -1, 1]} intensity={1.6} />
            <directionalLight position={[0, 2, 1]} intensity={1.6} />
            <directionalLight position={[0, 0, -1]} intensity={1.6} />
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
            <Center>
                <Macbook />
            </Center>
        </Canvas>
    );
};

export default MacbookScene;
