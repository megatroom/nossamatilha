import { ComponentStory, ComponentMeta } from '@storybook/react'
import Features from 'components/organisms/Features'

export default {
  title: 'Organisms/Features',
  component: Features,
  argTypes: {},
} as ComponentMeta<typeof Features>

const Template: ComponentStory<typeof Features> = (args) => (
  <Features {...args} />
)

export const Base = Template.bind({})
Base.args = {}
