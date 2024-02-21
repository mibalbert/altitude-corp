/**
 *
 */

"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { Environment, Text } from "@react-three/drei";

export default function ContactUsScene() {
  return (
    <Canvas style={{ background: "#000000", height: "800px" }}>
      <Model />

      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
