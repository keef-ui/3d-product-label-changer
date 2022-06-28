import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export default function Bottle({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/bottle/vegandream-label.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, 0.16, 0.25]}
        rotation={[-Math.PI / 2, 0, 0.17]}
        scale={1}
      >
        <mesh
          geometry={nodes.Backdrop.geometry}
          material={materials["SquarePlane material"]}
          position={[0, 0, -76.88]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[1, 1.37, 2.02]}
        />
      </group>
      <group
        position={[props.modelPosX,props.modelPosY,props.modelPosZ]}
        rotation={[-1.93, -0.03, -2.75]}
        scale={1}
      >
        <mesh
          geometry={nodes["MM-Chocolate-peanutButter-2kg_1"].geometry}
          material={materials["mm-choc-p-butter-2kg"]}
          position={[-14.71, 219.49, 23.09]}
          rotation={[-0.36, -0.03, -2.75]}
          scale={3}
        />
        <mesh
          geometry={nodes.B0008_01_pCylinder1.geometry}
          material={materials.VRayMtl8}
          position={[0, 0, -0.27]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.B0008_01_pCylinder2.geometry}
          material={materials.VRayMtl8}
          position={[0, 0, -0.27]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={75.23}
        near={0.01}
        fov={30.1}
        position={[0.14, 0.56, 0.52]}
        rotation={[-0.45, 0.17, 0.05]}
      />
      <mesh
        geometry={nodes.Image_Plane.geometry}
        material={nodes.Image_Plane.material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0}
      />
    </group>
  );
}
