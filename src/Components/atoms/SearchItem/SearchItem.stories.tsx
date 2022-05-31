import {  ComponentStory } from "@storybook/react";
import SearchItem from "./SearchItem";

export default{
    title:'Atoms/MySearchIcon',
    component:SearchItem
} ;

const Template:ComponentStory<typeof SearchItem>= (args)=> <SearchItem {...args} />;

export const searchitem = Template.bind({});