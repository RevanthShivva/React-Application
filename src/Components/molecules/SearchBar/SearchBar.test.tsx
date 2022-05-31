import {render, screen} from '@testing-library/react'
import { SearchBar } from "./Search";

describe("Search bar test", () => {
    test("Search bar", () => {
        render(<SearchBar/>)
        const search = screen.getByRole("textbox")
        expect(search).toBeInTheDocument()
    })
})