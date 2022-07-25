// /stories/pages/home.stories.jsx

import Bottle from "../../components/3dmodels/bottle";
import ShowModel from "../../components/3dmodels/show-model";
import "../assets/styles.css"

//Define Argtype for a slider so that we can resue it for cam positions
const slider = { control: { type: 'range', min: -100, max: 500, step: 3 } };
  

export default {
  title: "models/ModelPreview-side",
  component: ShowModel,
  subcomponents: { Bottle },
  argTypes: { camPosX: slider , camPosY:slider ,camPosZ:slider , modelPosX:slider,modelPosY:slider,modelPosZ:slider}
};

const Template = (args) => <div className="main">
                              <div className="preview">
                                  <ShowModel camPosX={args.camPosX} camPosY={args.camPosY} camPosZ={args.camPosZ} camPosition={args.camPosition} >
                                    <Bottle modelPosX={args.modelPosX} modelPosY={args.modelPosY} modelPosZ={args.modelPosZ}/>
                                  </ShowModel>
                              </div>
                            </div>

export const BottlePreview = Template.bind({});
BottlePreview.args={ camPosX:240,camPosY:100,camPosZ:150 ,  modelPosX: 0, modelPosY: -50, modelPosZ: 10}



//Notes:
//Controls : https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
//args argtypes: https://storybook.js.org/docs/react/writing-stories/args#gatsby-focus-wrapper
