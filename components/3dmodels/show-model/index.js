import { useRef,useState } from "react"
import {Canvas, useThree} from "@react-three/fiber"
import { useGLTF, PerspectiveCamera, OrbitControls, Html } from '@react-three/drei'

// ShowModel properties:
//----------------------
// camPosition:   is array value for the  position of perspective camera 
// children : The pass through child components

//Resources: 
// Snapshot: https://codesandbox.io/s/basic-demo-forked-rnuve?file=/src/App.js:1540-1580

function TestButton() {
  const gl = useThree((state) => state.gl);
  const takeSnapShot = () => {const link = document.createElement("a");
                link.setAttribute("download", "canvas.png");
                link.setAttribute(
                  "href",
                  gl.domElement
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream")
                );
                link.click();
  }

  return (
    <Html className="content" position={[0, 50, 20]}>
      <button onClick={takeSnapShot} type="button">
        Button...
      </button>
    </Html>
  );
}

export default function ShowModel({children,...props}) {
//  props.camPosition[0]=props.cx;
        //  const gl = useThree((state) => state.gl);
          // const takeSnapShot = () => {const link = document.createElement("a");
          //               link.setAttribute("download", "canvas.png");
          //               link.setAttribute(
          //                 "href",
          //                 gl.domElement
          //                   .toDataURL("image/png")
          //                   .replace("image/png", "image/octet-stream")
          //               );
          //               link.click();
          // }
          

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
          <TestButton />

        </Canvas>
      </>
    );
}


