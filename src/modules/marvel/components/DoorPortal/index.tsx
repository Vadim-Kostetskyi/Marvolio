import React, { Suspense } from "react";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import DoorModel from "../DoorModel";
import styles from "./index.module.scss";
import { marvelImagesMobile } from "modules/marvel/containers/MarvelProjects/data";

const NUM_MODELS = 10;
const RADIUS = 5;
const DEGREE_90 = Math.PI / 2;

const DoorScene = () => {
  const textures = useTexture(marvelImagesMobile);

  const models = Array.from({ length: NUM_MODELS }).map((_, index) => {
    const angle = (index / NUM_MODELS) * 2 * Math.PI;
    const x = RADIUS * Math.cos(angle);
    const z = RADIUS * Math.sin(angle);

    return (
      <group key={index}>
        <DoorModel position={[x, 3, z]} rotation={[0, -angle + DEGREE_90, 0]} />
        <mesh position={[x, 3, z]} rotation={[0, -angle + DEGREE_90, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial map={textures[index]} side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
  });

  return (
    <>
      <Environment preset="studio" />
      <OrbitControls
        minDistance={5}
        maxDistance={20}
        enableZoom={false}
        enablePan={true}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      {models}
    </>
  );
};

const DoorPortal = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 10]}
          fov={75}
          near={0.1}
          far={1000}
        />
        <Suspense fallback={null}>
          <DoorScene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DoorPortal;
