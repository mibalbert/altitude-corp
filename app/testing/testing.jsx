/**
 * testing.jsx
 */

"use client";

import { RGBELoader } from "three-stdlib";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { useControls, button } from "leva";
import {
  EffectComposer,
  HueSaturation,
  BrightnessContrast,
} from "@react-three/postprocessing";
import { Vector3 } from "three";
import { angleToRadians } from "@/lib/utils";
import { useRef } from "react";

const Scene = () => {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  const { autoRotate, text, shadow, ...config } = useControls({
    text: "ALTITUDE",
    backside: true,
    backsideThickness: { value: 0.3, min: 0, max: 2 },
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 5, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: "#ff9cf5",
    gColor: "#ff7eb3",
    shadow: "#750d57",
    autoRotate: false,
    // screenshot: button(() => {
    //   // Save the canvas as a *.png
    //   const link = document.createElement("a");
    //   link.setAttribute("download", "canvas.png");
    //   link.setAttribute(
    //     "href",
    //     document
    //       .querySelector("canvas")
    //       .toDataURL("image/png")
    //       .replace("image/png", "image/octet-stream")
    //   );
    //   link.click();
    // }),
  });
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 15]} />
      {/* <color attach="background" args={["#f2f2f5"]} /> */}
      {/** The text and the grid */}
      <Text config={config} rotation={[0, 0, 0]} position={[0, 0, 0]}>
        {text}
      </Text>

      <mesh
        position={[0, 0, 0]}
        rotation={[-angleToRadians(90), 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <meshLambertMaterial />
      </mesh>
      {/** Controls */}
      <OrbitControls
        ref={orbitControlsRef}
        // enableZoom={false}
        minPolarAngle={angleToRadians(60)}
        maxPolarAngle={angleToRadians(80)}
        autoRotate={autoRotate}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
      />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      <Environment preset="city" resolution={32}>
        {/* <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group> */}
      </Environment>
      {/** Soft shadows */}
      {/* <AccumulativeShadows
        frames={100}
        color={shadow}
        colorBlend={5}
        toneMapped={true}
        alphaTest={0.9}
        opacity={1}
        scale={30}
        position={[0, -1.01, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows> */}
    </>
  );
};

const TestingComp = () => {
  return (
    <Canvas
      shadows
      // camera={{ position: [10, 10, 20], zoom: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Scene />
    </Canvas>
  );
};

export default TestingComp;

function Text({
  children,
  config,
  font = "/fonts/helvetiker_regular.typeface.json",
  ...props
}) {
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );
  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
      </group>
    </>
  );
}
