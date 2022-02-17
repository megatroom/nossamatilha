import { ComponentStory, ComponentMeta } from "@storybook/react";
import SiteFooter from "../../components/organisms/SiteFooter";

export default {
  title: "Organisms/SiteFooter",
  component: SiteFooter,
  argTypes: {},
} as ComponentMeta<typeof SiteFooter>;

const Template: ComponentStory<typeof SiteFooter> = (args) => (
  <SiteFooter {...args} />
);

export const Base = Template.bind({});
Base.args = {};
