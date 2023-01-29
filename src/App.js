/* eslint-disable react/no-unknown-property */
import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import * as THREE from 'three';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Suspense } from 'react';
import Box from './Box';
import FloatingText from './FloatingText';

export default function App() {

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 400,
          position: [0, 2, 10],
        }}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
      >
        <color attach="background" args={['#111']} />
        <ambientLight intensity={3} />
        <spotLight intensity={2} args={[0, 3, 4]} />
        <pointLight position={[20, 10, -10]} intensity={2} />
        <primitive object={new THREE.AxesHelper(2)} />
        <primitive object={new THREE.GridHelper(20, 20)} />
        <OrbitControls />
        <FloatingText />
        <Box key="box" />
      </Canvas>
    </Suspense>
  );
}
