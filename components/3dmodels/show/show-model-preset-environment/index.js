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
          preset={props.envPreset}
        />
      </Canvas>
    </>
  );
}

// {
//   sunset: 'venice/venice_sunset_1k.hdr',
//   dawn: 'kiara/kiara_1_dawn_1k.hdr',
//   night: 'dikhololo/dikhololo_night_1k.hdr',
//   warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
//   forest: 'forrest-slope/forest_slope_1k.hdr',
//   apartment: 'lebombo/lebombo_1k.hdr',
//   studio: 'studio-small-3/studio_small_03_1k.hdr',
//   city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
//   park: 'rooitou/rooitou_park_1k.hdr',
//   lobby: 'st-fagans/st_fagans_interior_1k.hdr',
// }

  // sunset,dawn,night,warehouse,forest,apartment,studio,city,park,lobby