// /stories/pages/home.stories.jsx

import WineBottle from "../../components/3dmodels/wine/wine-purple";
import ShowModel from "../../components/3dmodels/show/show-model-preset-environment";
import "../assets/styles.css"

const slider = { control: { type: 'range', min: -100, max: 500, step: 0.1 } };
const envPresetDD = {control: { type: "select", options: [  "sunset","dawn","night","warehouse","forest","apartment","studio","city","park","lobby"]} }

  

export default {
  title: "3dmodels/wine-bottle/WineBottle-Preview-Presetenv-purple",
  component: ShowModel,
  subcomponents: { WineBottle },
   argTypes: { camPosX: slider , camPosY:slider ,camPosZ:slider , modelPosX:slider,modelPosY:slider,modelPosZ:slider , envPreset:envPresetDD}
};

const Template = (args) => <div className="main">
                              <div className="preview">
                                  <ShowModel camPosX={args.camPosX} camPosY={args.camPosY} camPosZ={args.camPosZ} camPosition={args.camPosition} envPreset={args.envPreset}>
                                    <WineBottle modelPosX={args.modelPosX} modelPosY={args.modelPosY} modelPosZ={args.modelPosZ} />
                                  </ShowModel>
                              </div>
                            </div>

export const WineBottlePreviewWithShapeLights = Template.bind({});
WineBottlePreviewWithShapeLights.args={ camPosX:240,camPosY:100,camPosZ:50 ,  modelPosX: -4.25, modelPosY: -110.06, modelPosZ: 5.9, envPreset:"warehouse"}



//Using
//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };

//Controls : https://storybook.js.org/docs/react/essentials/controls#gatsby-focus-wrapper
//args argtypes: https://storybook.js.org/docs/react/writing-stories/args#gatsby-focus-wrapper

//preset hdr environments for lighting
// {
//   sunset: 'venice/venice_sunset_1k.hdr',
//   dawn: 'kiara/kiara_1_dawn_1k.hdr',
//   night: 'dikhololo/dikhololo_night_1k.hdr',
//   warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
//   forest: 'forrest-slope/forest_slope_1k.hdr',
//   apartment: 'lebombo/lebombo_1k.hdr',
//   studio: 'studio-small-3/studio_small_03_1k.hdr',
//   city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
//   park: 'rooitou/rooitou_park_1k.hdr',
//   lobby: 'st-fagans/st_fagans_interior_1k.hdr',
// }

  // sunset,dawn,night,warehouse,forest,apartment,studio,city,park,lobby