import React from 'react';

import {Button} from "../../../components/ui/buttons/Button";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <div style={{height:"2rem"}} ><Button {...args} /></div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Wide = Template.bind({});
Wide.args = {
  size: 'wide',
  label: 'Button',
};

export const Wide2 = Template.bind({});
Wide2.args = {
  size: 'wide2',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'wide',
  label: 'Button',
  disabled:'disabled'

};

export const PrimaryWideBottom = Template.bind({});
PrimaryWideBottom.args = {
  size: 'wide2',
  label: 'Button',
   primary: true

};
