import React, { FC, useRef } from "react";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import DoorModel from "../DoorModel";
import { marvelImagesMobile } from "modules/marvel/containers/MarvelProjects/data";

interface DoorSceneProps {
  isRotating: boolean;
}

const NUM_MODELS = 8;
const RADIUS = 5;
const DEGREE_90 = Math.PI / 2;

const DoorScene: FC<DoorSceneProps> = ({ isRotating }) => {
  const textures = useTexture(marvelImagesMobile);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && isRotating) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const handleClick = (index: number) => {
    console.log(`Clicked image index: ${index}`);
  };

  const models = Array.from({ length: NUM_MODELS }).map((_, index) => {
    const angle = (index / NUM_MODELS) * 2 * Math.PI;
    const x = RADIUS * Math.cos(angle);
    const z = RADIUS * Math.sin(angle);

    return (
      <group key={index}>
        <DoorModel position={[x, 3, z]} rotation={[0, -angle + DEGREE_90, 0]} />
        <mesh
          position={[x, 3, z]}
          rotation={[0, -angle + DEGREE_90, 0]}
          onClick={() => handleClick(index)}
        >
          <planeGeometry args={[1, 1.8]} />
          <meshBasicMaterial map={textures[index]} side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
  });

  return (
    <group ref={groupRef}>
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
    </group>
  );
};

export default DoorScene;
