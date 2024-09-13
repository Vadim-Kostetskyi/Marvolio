import React, { Suspense, useState, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import DoorScene from "modules/marvel/components/DoorScene";
import styles from "./index.module.scss";

const DoorPortal = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handlePointerDown = () => {
    setIsRotating(false);
  };

  const handlePointerUp = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setIsRotating(true);
      }, 1000)
    );
  };

  useEffect(() => {
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

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
          <DoorScene isRotating={isRotating} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DoorPortal;
