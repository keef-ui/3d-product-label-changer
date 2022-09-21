import ShowModel from "../../../components/3dmodels/show/show-model";
import "../../assets/styles.css";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const slider = { control: { type: "range", min: -10, max: 20, step: 0.1 } };

export default {
  title: "framer3d/laptop",
  component: ShowModel,
  subcomponents: { Laptop },
  argTypes: {
    camPosX: slider,
    camPosY: slider,
    camPosZ: slider,
    modelPosX: slider,
    modelPosY: slider,
    modelPosZ: slider,
  },
};

const Template = (args) => (
  <div className="main">
    <div className="preview">
      <ShowModel
        camPosX={args.camPosX}
        camPosY={args.camPosY}
        camPosZ={args.camPosZ}
        camPosition={args.camPosition}
      >
        <Laptop
          modelPosX={args.modelPosX}
          modelPosY={args.modelPosY}
          modelPosZ={args.modelPosZ}
        />
      </ShowModel>
    </div>
  </div>
);

export const LaptopPreview = Template.bind({});
LaptopPreview.args = {
  camPosX: 0,
  camPosY: 0,
  camPosZ: 30,
  modelPosX: 0,
  modelPosY: -0.9,
  modelPosZ: 0,
};


function Laptop({ modelPosX, modelPosY, modelPosZ}) {
    const group = useRef();

    const { nodes, materials } = useGLTF("/models/laptop/laptop-7.glb");
    //Closed position for laptop is  rotation={[(105 * Math.PI) / 180, 0, 0]}  position={[0, 108,- 67]}
    return (
      <group ref={group} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
          <motion.group
            scale={3.37}
            animate={{ rotateX: (105 * Math.PI) / 180 , x:0, y:108, z:-67 }}
          >
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
          </motion.group>
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