import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

/*
 * Renders a another 3D wine bottle using imported GLb model using useGLTF hook
 *
 *
 */

// export default function Model({ modelPosX, modelPosY, modelPosZ }) {
//   const { nodes, materials } = useGLTF("/models/wine-purple/wine-purple.glb");
//   return (
//     <group position={[modelPosX, modelPosY, modelPosZ]} dispose={null}>
//       <mesh
//         geometry={nodes["Tube_-_baked"].geometry}
//         material={materials.Brimstone}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={1}
//       />
//       <mesh
//         geometry={nodes["Tube_-_baked_2"].geometry}
//         material={materials["Brimstone 1"]}
//         rotation={[-Math.PI / 2, 0, 0.61]}
//         scale={1}
//       />
//       <mesh
//         geometry={nodes["Tube_-_baked_1"].geometry}
//         material={materials["Copper Satin"]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={1}
//       />
//     </group>
//   );
// }

export default function Model({ modelPosX, modelPosY, modelPosZ }) {
 const { nodes, materials } = useGLTF("/models/wine-purple/wine-purple.glb");
  return (
    <group position={[modelPosX, modelPosY, modelPosZ]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI/2]} scale={1}>
        <mesh
          geometry={nodes["Tube_-_baked"].geometry}
          material={materials.Brimstone}
          scale={0.6}
        />
        <mesh
          geometry={nodes["Tube_-_baked_2"].geometry}
          material={materials["Brimstone 1"]}
          rotation={[0, 0, 0.61]}
          scale={0.6}
        />
        <mesh
          geometry={nodes["Tube_-_baked_1"].geometry}
          material={materials["Copper Satin"]}
          scale={0.6}
        />
      </group>
    </group>
  );
}