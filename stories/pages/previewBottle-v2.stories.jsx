// /stories/pages/home.stories.jsx

import Bottle from "../../components/3dmodels/bottle/test-bottle";
import ShowModel from "../../components/3dmodels/show-model";
import "../assets/styles.css"


export default {
  title: "models/ModelPreview-v2",
  component: ShowModel,
  subcomponents: { Bottle },
  argTypes: { cx: { control: { type: 'range', min: -100, max: 100, step: 3 } }}
};

const Template = (args) => <div className="main">
                              <div className="preview">
                                  <ShowModel cx={args.cx} camPosition={args.camPosition} >
                                    <Bottle mposition={args.mposition}/>
                                  </ShowModel>
                              </div>
                            </div>
export const BottlePreview = Template.bind({});
BottlePreview.args={camPosition:[0,100,150],mposition:[0,-50,10], cx:100}



//Using
//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };

//Controls : https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
//args argtypes: https://storybook.js.org/docs/react/writing-stories/args#gatsby-focus-wrapper
