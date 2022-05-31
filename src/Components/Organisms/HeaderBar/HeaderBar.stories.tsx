import {  ComponentStory } from "@storybook/react"

import HeaderBar from "./HeaderBar"

export default{

    title:'Organisms/HeaderBar',
    component:HeaderBar
};

const Template : ComponentStory<typeof HeaderBar> = (args) => <HeaderBar{...args} /> 

export const BasicAppBar = Template.bind({});