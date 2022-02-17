import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";

// import { Button } from './Button';
import Button from "../../components/atoms/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <Stack direction="row" spacing={2}>
    <Button {...args}>Primary</Button>
    <Button {...args} color="secondary">
      Secondary
    </Button>
    <Button {...args} color="success">
      Success
    </Button>
    <Button {...args} color="error">
      Error
    </Button>
  </Stack>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Hero = Template.bind({});
Hero.args = {
  isHero: true,
};
