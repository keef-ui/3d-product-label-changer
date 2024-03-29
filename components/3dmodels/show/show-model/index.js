import { useEffect, useRef,useState } from "react"
import {Canvas , useThree } from "@react-three/fiber"
import { useGLTF, PerspectiveCamera, OrbitControls} from '@react-three/drei'



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
      <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
        <ambientLight />
        <pointLight position={[50, 10, 50]} />        
        {children}
        <PerspectiveCamera
          makeDefault
          position={[props.camPosX, props.camPosY, props.camPosZ]}
        />
        <OrbitControls />
      </Canvas>
    </>
  );
}


