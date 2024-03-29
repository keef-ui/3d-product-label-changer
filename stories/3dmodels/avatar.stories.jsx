// /stories/pages/home.stories.jsx

import Avatar from "../../components/3dmodels/avatar/ready-player/me";
import ShowModel from "../../components/3dmodels/show/show-model";
import "../assets/styles.css";

const slider = { control: { type: "range", min: -10, max: 20, step: 0.1 } };

export default {
  title: "3dmodels/avatar",
  component: ShowModel,
  subcomponents: { Avatar },
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
        <Avatar
          modelPosX={args.modelPosX}
          modelPosY={args.modelPosY}
          modelPosZ={args.modelPosZ}
        />
      </ShowModel>
    </div>
  </div>
);

export const AvatarPreview = Template.bind({});
AvatarPreview.args = {
  camPosX: 0,
  camPosY: 0,
  camPosZ: 3,
  modelPosX: 0,
  modelPosY: -0.9,
  modelPosZ: 0,
};

//Using
//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };

//Controls : https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
//args argtypes: https://storybook.js.org/docs/react/writing-stories/args#gatsby-focus-wrapper
