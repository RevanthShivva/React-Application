import {  ComponentStory } from "@storybook/react"
import HeaderWithCategories from "./HeaderWithCategory";

export default{

    title:'Organisms/HeaderWithCategories',
    component:HeaderWithCategories
} 

const Template : ComponentStory<typeof HeaderWithCategories> = (args) =>  <HeaderWithCategories {...args} /> 

export const HeaderCat = Template.bind({});