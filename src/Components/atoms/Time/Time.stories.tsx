import { ComponentStory } from "@storybook/react";
import Time from "./Time";

export default{
   title:'Atoms/Time',
   component:Time
};

const Template : ComponentStory<typeof Time> = (args) => <Time />
export const Time1 = Template.bind({});