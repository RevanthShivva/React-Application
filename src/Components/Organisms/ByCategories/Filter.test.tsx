import {  render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import { FilterByCategory } from "./FilterByCategory";


let TestFilter = (args: any) => {
    return (
        <BrowserRouter>
            <FilterByCategory {...args} />
        </BrowserRouter>
    )
}

describe("Book categories test", () => {
    test("Trending test", () => {
        render(<TestFilter  status="TrendingBlinks" />)
        let employee = screen.getByRole("heading")

        expect(employee).toBeInTheDocument()
    })

  

   
})