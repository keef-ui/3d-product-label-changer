import { useRef,useState } from "react"
import {Canvas} from "@react-three/fiber"
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'

// ShowModel properties:
//----------------------
// camPosition:   is array value for the  position of perspective camera 
// children : The pass through child components

export default function ShowModel({children,...props}) {
//  props.camPosition[0]=props.cx;
    return (
      <>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {children}
          <PerspectiveCamera
            makeDefault
            position={[props.cx, props.camPosition[1], props.camPosition[2]]}
          />
          <OrbitControls />
        </Canvas>
      </>
    );
}


