import { ComponentStory } from "@storybook/react";


import { FilterByCategory } from "./FilterByCategory";


export default {
    title: "Organisms/Categories",
    component: FilterByCategory
}

const Template: ComponentStory<typeof FilterByCategory> = args => <FilterByCategory  {...args} />


export const Featured = Template.bind({})
Featured.args = {
    
    booksStatus: "FeaturedBlinks"
}

export const JustAdded = Template.bind({})
JustAdded.args = {
   
    booksStatus: "JustAdded"
}

export const Trending = Template.bind({})
Trending.args = {
    
    booksStatus: "TrendingBlinks"
}