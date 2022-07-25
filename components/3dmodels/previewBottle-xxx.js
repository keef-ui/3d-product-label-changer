import { useRef,useState } from "react"
import {Canvas} from "@react-three/fiber"
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Bottle from "./bottle";

export default function Model() {

    return (
      <>
        <Canvas camera={{position:[10,130,250],fov:55.1,rotation:[-0.245, 0.17, 0.05]}}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Bottle />
          <OrbitControls />
        </Canvas>
      </>
    );
}