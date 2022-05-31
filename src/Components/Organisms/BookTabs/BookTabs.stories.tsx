import { ComponentStory } from "@storybook/react"
import { BookDetails } from "./BookTabs"

export default {
    title: "Organisms/About Book",
    component: BookDetails
}

let Template: ComponentStory<typeof BookDetails> = () => < BookDetails />

export const BookDetls = Template.bind({})
BookDetls.args = {
    
}