// /stories/pages/home.stories.jsx

import Bottle from "../../components/3dmodels/bottle";
import ShowModel from "../../components/3dmodels/show-model/";
import "../assets/styles.css"


export default {
  title: "models/ModelPreview",
  component: ShowModel,
  subcomponents: { Bottle }
};

// export const BottlePreview = () => <ShowModel camPosition={[0,80,130]} ><Bottle /></ShowModel>
const Template = (args) => <div className="main"><div className="preview"><ShowModel {...args} ><Bottle /></ShowModel></div></div>
export const BottlePreview = Template.bind({});
BottlePreview.args={camPosition:[100,60,100],cx:10}



//Using
//👇 We create a “template” of how args map to rendering
// const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };
