// /stories/pages/home.stories.jsx

import WineBottle from "../../components/3dmodels/wine";
import ShowModel from "../../components/3dmodels/show-model-environment";
import "../assets/styles.css"

const slider = { control: { type: 'range', min: -100, max: 500, step: 0.1 } };

  

export default {
  title: "models/WineBottle-Preview-environment",
  component: ShowModel,
  subcomponents: { WineBottle },
   argTypes: { camPosX: slider , camPosY:slider ,camPosZ:slider , modelPosX:slider,modelPosY:slider,modelPosZ:slider}
};

const Template = (args) => <div className="main">
                              <div className="preview">
                                  <ShowModel camPosX={args.camPosX} camPosY={args.camPosY} camPosZ={args.camPosZ} camPosition={args.camPosition} >
                                    <WineBottle modelPosX={args.modelPosX} modelPosY={args.modelPosY} modelPosZ={args.modelPosZ} />
                                  </ShowModel>
                              </div>
                            </div>

export const WineBottlePreview = Template.bind({});
WineBottlePreview.args={ camPosX:240,camPosY:100,camPosZ:50 ,  modelPosX: -4.25, modelPosY: -62.06, modelPosZ: 5.9}



//Using
//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };

//Controls : https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
//args argtypes: https://storybook.js.org/docs/react/writing-stories/args#gatsby-focus-wrapper
