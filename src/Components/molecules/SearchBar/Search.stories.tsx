import { ComponentStory } from "@storybook/react";
import { SearchBar } from "./Search";

export default {
    title: 'Molecules/SearchBar',
    component: SearchBar
}

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar/>

export const SearchBarElement = Template.bind({})