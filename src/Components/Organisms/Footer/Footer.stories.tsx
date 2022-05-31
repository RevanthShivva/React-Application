import {  ComponentStory } from "@storybook/react"
import { Footer } from "./Footer"

export default{
    title:'Organisms/Footer',
    component:Footer
} 

const Template : ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const BasicFooter = Template.bind({});