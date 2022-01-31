import { ComponentStory, ComponentMeta } from "@storybook/react";
import Showroom from "../../components/organisms/Showroom";

export default {
  title: "Organisms/Showroom",
  component: Showroom,
  argTypes: {},
} as ComponentMeta<typeof Showroom>;

const Template: ComponentStory<typeof Showroom> = (args) => (
  <Showroom {...args} />
);

export const Base = Template.bind({});
Base.args = {};
