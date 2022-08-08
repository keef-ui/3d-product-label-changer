import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  useGLTF,
  PerspectiveCamera,
  OrbitControls,
  Environment,
  Lightformer,
} from "@react-three/drei";

// ShowModel properties:
//----------------------
// camPosition:   is array value for the  position of perspective camera
// children : The pass through child components
// Resources:
// Snapshot: https://codesandbox.io/s/basic-demo-forked-rnuve?file=/src/App.js:1540-1580

export default function ShowModel({ children, ...props }) {
  //  const gl = useThree((state) => state.gl);

  return (
    <>
      <Canvas gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[90, 60, 50]} />

        {children}
        <PerspectiveCamera
          makeDefault
          position={[props.camPosX, props.camPosY, props.camPosZ]}
        />
        <OrbitControls />
        <Environment
          frames={Infinity}
          resolution={256}
          background={true}
          files={"./hdritest.hdr"}
        >
          {/* Ceiling light */}

          {/* Background */}
        </Environment>
      </Canvas>
    </>
  );
}
