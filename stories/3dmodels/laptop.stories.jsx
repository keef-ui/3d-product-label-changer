// /stories/pages/home.stories.jsx

import { arraySlice } from "three/src/animation/AnimationUtils";
import Laptop from "../../components/3dmodels/laptop/";
import ShowModel from "../../components/3dmodels/show/show-model";
import "../assets/styles.css";

const slider = { control: { type: "range", min: -50, max: 50, step: 0.5 } };
const rotate = { control: { type: "range", min: 1, max: 360, step: 1 } };

export default {
  title: "3dmodels/laptop",
  component: ShowModel,
  subcomponents: { Laptop },
  argTypes: {
    camPosX: slider,
    camPosY: slider,
    camPosZ: slider,
    modelPosX: slider,
    modelPosY: slider,
    modelPosZ: slider,
    xRotate:rotate,
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
          xRotate={args.xRotate}
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
  modelPosY: 0,
  modelPosZ: 0,
  xRotate:0
};

//Using
//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };

//Controls : https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
//args argtypes: https://storybook.js.org/docs/react/writing-stories/args#gatsby-focus-wrapper
