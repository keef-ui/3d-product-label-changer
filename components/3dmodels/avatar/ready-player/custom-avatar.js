import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";


export default function Model({ modelPosX, modelPosY, modelPosZ, color }) {
  const group = useRef();

  const { nodes, materials } = useGLTF(
    "/models/custom-avatar/avatar-custom.glb"
  );
  return (
    <group
      dispose={null}
      position={[modelPosX, modelPosY, modelPosZ]}
      ref={group}
    >
      <group position={[0, 1.19, -0.12]}>
        <mesh
          geometry={nodes.Wolf3D_Hair_2.geometry}
          material={materials["Wolf3D_Hair 2"]}
          position={[0, -1.19, 0.12]}
        />
        <mesh
          geometry={nodes.Wolf3D_Hair_1.geometry}
          material={materials["Wolf3D_Hair 1"]}
          position={[0, -1.19, 0.12]}
        />
      </group>
      <group position={[0, 1.21, -0.2]}>
        <mesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials["Wolf3D_Outfit_Top 2"]}
          position={[0, -1.21, 0.2]}
        />
        <mesh
          geometry={nodes.Wolf3D_Outfit_Top_2.geometry}
          material={materials["Wolf3D_Outfit_Top 1"]}
          position={[0, -1.21, 0.2]}
        />
     
      </group>
      <mesh
        geometry={nodes.EyeLeft.geometry}
        material={materials["Wolf3D_Eye 2"]}
      />
      <mesh
        geometry={nodes.EyeRight.geometry}
        material={materials["Wolf3D_Eye 3"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body 2"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin 2"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Bottom_2.geometry}
        material={materials["Wolf3D_Outfit_Bottom 1"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom 2"]}
      />
      <mesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear 1"]}
        position={[0, 0.02, 0]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth 2"]}
      />
    </group>
  );
}