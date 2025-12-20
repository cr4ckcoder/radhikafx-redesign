import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.rotation.y = time * 0.1;
            sphereRef.current.distort = 0.3 + Math.sin(time) * 0.1;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.4}>
            <MeshDistortMaterial
                color="#e9db8d"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
                wireframe
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute top-0 right-0 w-full h-full md:w-1/2 md:h-full z-0 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#0e234e" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};

export default Hero3D;
