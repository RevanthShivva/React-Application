import {  ComponentStory } from "@storybook/react";
import BeyondEntre from "./BeyondEntre";

export default{
    title:'Organisms/BeyondEntrepreneurship',
    component:BeyondEntre
} ;


const Template:ComponentStory<typeof BeyondEntre> = (args) => <BeyondEntre  />

export const aboutBeyond= Template.bind({});