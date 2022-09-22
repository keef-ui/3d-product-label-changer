import ShowModel from "../../../components/3dmodels/show/show-model";
import "../../assets/styles.css";
import React, { useEffect, useRef, useState } from "react";
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

const Template = (args) => { 
  const [isOpen, setIsOpen] = useState(false);
  
  return (
          <div className="main">
            <div className="preview" onClick={() => setIsOpen(!isOpen)}>
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
                  isOpen={isOpen}
                  set={setIsOpen}
                />
              </ShowModel>
              
            </div>
          </div>
      )
};

export const LaptopPreview = Template.bind({});
LaptopPreview.args = {
  camPosX: 0,
  camPosY: 0,
  camPosZ: 30,
  modelPosX: 0,
  modelPosY: -0.9,
  modelPosZ: 0,
};


function Laptop({ modelPosX, modelPosY, modelPosZ, isOpen}) {
    

    const { nodes, materials } = useGLTF("/models/laptop/laptop-test.glb");
    //Closed position for laptop is  rotation={[(105 * Math.PI) / 180, 0, 0]}  position={[0, 108,- 67]}
    const variants = {
      open: {
        rotateX: [
          (105 * Math.PI) / 180,
          (100 * Math.PI) / 180,
          (90 * Math.PI) / 180,
          (45 * Math.PI) / 180,
          (20 * Math.PI) / 180,
          (1 * Math.PI) / 180,
        ],
        x: 0,
        y: [105, 89, 33, 8, 0],
        z: [-70, -75, -53, -30, 0],
      },
      initial: { rotateX: (105 * Math.PI) / 180, x: 0, y: 108, z: -67 },
      closed: {
        rotateX: [
          (1 * Math.PI) / 180,
          (20 * Math.PI) / 180,
          (45 * Math.PI) / 180,
          (90 * Math.PI) / 180,
          (100 * Math.PI) / 180,
          (105 * Math.PI) / 180,
        ],
        x: 0,
        y: [0, 8, 33, 89, 105],
        z: [0, -30, -53, -75, -70],
      },
    };
 
    return (
      <group dispose={null}>
        <group
          position={[0, -0.12, 2.29]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.03}
        >
          <motion.group
            scale={3.37}
            // animate={{ rotateX: (105 * Math.PI) / 180 , x:0, y:108, z:-67 }}
            initial={"initial"}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.8 }}
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




      // <group {...props} dispose={null}>
      //   <group
      //     position={[0, -0.12, 2.29]}
      //     rotation={[-Math.PI / 2, 0, 0]}
      //     scale={0.03}
      //   >
      //     <motion.group
      //       scale={3.37}
      //       // animate={{ rotateX: (105 * Math.PI) / 180 , x:0, y:108, z:-67 }}
      //       initial={"closed"}
      //       animate={isOpen ? "open" : "closed"}
      //       variants={variants}
      //       transition={{duration:1}}
      //     >
      //       <mesh
      //         geometry={nodes.Screen.geometry}
      //         material={materials["Screen 1"]}
      //         scale={0.3}
      //       />
      //       <mesh
      //         geometry={nodes.Black_Inset.geometry}
      //         material={materials["Display Rim"]}
      //         scale={0.3}
      //       />
      //       <mesh
      //         geometry={nodes.Rubber.geometry}
      //         material={materials["Display Rubber"]}
      //         scale={0.3}
      //       />
      //       <mesh
      //         geometry={nodes.Screen_Back.geometry}
      //         material={materials["Body 1"]}
      //         scale={0.3}
      //       />
      //     </motion.group>
      //     <mesh
      //       geometry={nodes.Keyboard.geometry}
      //       material={materials["Keyboard 1"]}
      //     />
      //     <mesh
      //       geometry={nodes.Touch_Panel.geometry}
      //       material={materials["Touch Bar"]}
      //     />
      //     <mesh geometry={nodes.Ports.geometry} material={materials.Ports} />
      //     <mesh
      //       geometry={nodes.Touchpad.geometry}
      //       material={materials.Touchpad}
      //     />
      //     <mesh geometry={nodes.Body.geometry} material={materials["Body 1"]} />
      //   </group>
      // </group>;