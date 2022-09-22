import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";



  
  export default  function Model({ modelPosX, modelPosY, modelPosZ, xRotate}) {
    const group = useRef();

    const { nodes, materials } = useGLTF("/models/laptop/laptop-7.glb");
    //Closed position for laptop is  rotation={[(105 * Math.PI) / 180, 0, 0]}  position={[0, 108,- 67]}
    return (
      <group ref={group} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
          <group    scale={3.37} 
                    rotation={[(xRotate * Math.PI) / 180, 0, 0]}
                    position={[modelPosX,modelPosY,modelPosZ]}>
            <mesh
              geometry={nodes.Screen.geometry}
              material={materials["Screen 1"]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Black_Inset.geometry}
              material={materials["Display Rim"]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Rubber.geometry}
              material={materials["Display Rubber"]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Screen_Back.geometry}
              material={materials["Body 1"]}
              scale={0.3}
            />
          </group>
          <mesh
            geometry={nodes.Keyboard.geometry}
            material={materials["Keyboard 1"]}
          />
          <mesh
            geometry={nodes.Touch_Panel.geometry}
            material={materials["Touch Bar"]}
          />
          <mesh geometry={nodes.Ports.geometry} material={materials.Ports} />
          <mesh
            geometry={nodes.Touchpad.geometry}
            material={materials.Touchpad}
          />
          <mesh geometry={nodes.Body.geometry} material={materials["Body 1"]} />
        </group>
      </group>
    );
  }