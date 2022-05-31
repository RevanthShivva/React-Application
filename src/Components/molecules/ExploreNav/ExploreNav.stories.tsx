import { ComponentStory } from "@storybook/react";
import { ExploreNav } from "./ExploreNav";

export default {
    title: 'Organisms/Explore Data Nav',
    component: ExploreNav
}

const Template: ComponentStory<typeof ExploreNav> = () => <ExploreNav />

export const ExploreNav1 = Template.bind({})
ExploreNav1.args = {
    
}