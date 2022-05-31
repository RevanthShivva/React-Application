import { ComponentStory } from "@storybook/react"
import { TabsRest } from "./Tabs"

export default {
    title: 'Organisms/Tabs',
    component: TabsRest
}

const Template: ComponentStory<typeof TabsRest> = () => <TabsRest />

export const RequiredTabs = Template.bind({})
RequiredTabs.args = {

}