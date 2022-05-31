import { ComponentStory } from "@storybook/react";
import { MainBanner } from "./Banner";

export default {
    title: 'Organisms/Banner',
    component: MainBanner
}

const Template: ComponentStory<typeof MainBanner> = () => <MainBanner />

export const FinalBanner = Template.bind({})
FinalBanner.args = {
    
}