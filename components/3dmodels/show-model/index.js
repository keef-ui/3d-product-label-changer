import { useRef,useState } from "react"
import {Canvas } from "@react-three/fiber"
import { useGLTF, PerspectiveCamera, OrbitControls} from '@react-three/drei'
import SnapShotButton from "../helpers/snapshot"

// ShowModel properties:
//----------------------
// camPosition:   is array value for the  position of perspective camera 
// children : The pass through child components

//Resources: 
// Snapshot: https://codesandbox.io/s/basic-demo-forked-rnuve?file=/src/App.js:1540-1580


export default function ShowModel({children,...props}) {
        

    return (
      <>
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {children}
          <PerspectiveCamera
            makeDefault
            position={[props.camPosX, props.camPosY, props.camPosZ]}
          />
          <OrbitControls />
          <SnapShotButton />

        </Canvas>
      </>
    );
}


