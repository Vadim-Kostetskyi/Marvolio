import React, { FC, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

interface DoorModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const DoorModel: FC<DoorModelProps> = (props) => {
  const meshRef = useRef<Mesh>(null!);

  const { nodes } = useGLTF("/doorPortal.glb");

  const mesh = nodes.mesh_0 as Mesh;

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={mesh.material}
      />
    </group>
  );
};

export default DoorModel;
