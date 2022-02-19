import { ComponentStory, ComponentMeta } from '@storybook/react'
import SiteNavbar from 'components/organisms/SiteNavbar'

export default {
  title: 'Organisms/SiteNavbar',
  component: SiteNavbar,
  argTypes: {},
} as ComponentMeta<typeof SiteNavbar>

const Template: ComponentStory<typeof SiteNavbar> = (args) => (
  <SiteNavbar {...args} />
)

export const Base = Template.bind({})
Base.args = {}
