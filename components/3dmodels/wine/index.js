import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

/*
 * Renders a 3D wine bottle using imported GLTF model using useGLTF hook
 *
 *
 */


export default function Model({ modelPosX, modelPosY, modelPosZ }) {
  const { nodes, materials } = useGLTF("/models/wine/wine-bottle.gltf");
  return (
    <group dispose={null}>
      <group
         position={[modelPosX, modelPosY, modelPosZ]}
        rotation={[-1.6, 0, 0.5]}
        scale={1}
      >
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials["Titanium Satin"]}
          position={[-8.32, -6.81, 116.08]}
          rotation={[1.57, 0.02, 0]}
          scale={[0.76, 1.28, 1.05]}
        />
        <mesh
          geometry={nodes["Tube_-_baked"].geometry}
          material={materials.Maverick}
          position={[-0.09, -0.16, 4.7]}
          scale={0.94}
        />
        <mesh
          geometry={nodes.vegn2_1.geometry}
          material={materials["Island Paradise 1"]}
          position={[-61.97, 16.4, 40.37]}
          rotation={[-1.58, -0.05, 3.14]}
          scale={[0.45, 0.52, 0.4]}
        />
      </group>
      {/* <OrthographicCamera
        makeDefault={false}
        far={34.17}
        near={0.01}
        position={[-0.04, 0.07, 0.37]}
      /> */}
    </group>
  );
}
