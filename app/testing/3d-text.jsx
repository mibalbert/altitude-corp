import { Text3D } from "@react-three/drei";
import React from "react";

const Text3 = () => {
  // const textOptions = {
  //   size: 80,
  //   height: 5,
  //   curveSegments: 12,
  //   bevelEnabled: true,
  //   bevelThickness: 2,
  //   bevelSize: 1,
  //   bevelOffset: 0,
  //   bevelSegments: 5,
  // };

  return (
    // <Text3D {...textOptions} font="./fonts/helvetiker_regular.typeface.json">
    <Text3D    font="./fonts/helvetiker_regular.typeface.json">
      ALTITUDE
      <meshNormalMaterial />
    </Text3D>
  );
};

export default Text3;
