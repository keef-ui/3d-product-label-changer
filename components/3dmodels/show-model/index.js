import { useRef,useState } from "react"
import {Canvas} from "@react-three/fiber"
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

// ShowModel properties:
//----------------------
// camPosition:   is array value for the  position of perspective camera 
// children : The pass through child components

export default function ShowModel({children,camPosition}) {

    return (
      <>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {children}
          <PerspectiveCamera makeDefault position={camPosition} />
          <OrbitControls />
        </Canvas>
      </>
    );
}


