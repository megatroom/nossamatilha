import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Home from 'components/templates/site/Home'

export default {
  title: 'Templates/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Base = Template.bind({})
Base.args = {}
