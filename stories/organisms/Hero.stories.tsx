import { ComponentStory, ComponentMeta } from '@storybook/react'
import Hero from 'components/organisms/Hero'

export default {
  title: 'Organisms/Hero',
  component: Hero,
  argTypes: {},
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Base = Template.bind({})
Base.args = {}
