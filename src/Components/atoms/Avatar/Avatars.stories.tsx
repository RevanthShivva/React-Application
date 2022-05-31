import {  ComponentStory } from "@storybook/react"
import React from "react"
import Avatars from "./Avatars"

export default{

    title:'Atoms/MyAvatar',
    component:Avatars
} 

const Template:ComponentStory<typeof Avatars>= (args) => <Avatars {...args} />

export const R= Template.bind({});
R.args={
    alphabet:'R'
};