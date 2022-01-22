import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImage from "../assets/hero.jpg";

import Home from "../../components/templates/Home";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Base = Template.bind({});
Base.args = {
  heroImage: HeroImage,
};
