import ShowModel from "../../../../components/3dmodels/show/show-model";
import "../../../assets/laptop.css";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { ToggleSwitch } from "../../../../components/ui/toggle-switch/ToggleSwitch";
import Laptopx, {LaptopMotionYT as Laptop} from "../../../../components/3dmodels/laptop/";


const slider = { control: { type: "range", min: -10, max: 20, step: 0.1 } };

export default {
  title: "framer3d/youtube",
  component: ShowModel,
  subcomponents: { Laptop},
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
    <div className="container">
      <div className="preview" >
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
      <div className="footer">
        <ToggleSwitch setToggle={setIsOpen} isToggleOn={isOpen} />
      </div>
    </div>
  );
};

export const LaptopPreview = Template.bind({});
LaptopPreview.args = {
  camPosX: 0,
  camPosY: 0,
  camPosZ: 20,
  modelPosX: 0,
  modelPosY: -0.9,
  modelPosZ: 0,
};




