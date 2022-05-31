import {  render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import { Footer } from "./Footer"


let TestFooter= (args: any) => {
    return (
        <BrowserRouter>
            <Footer  />
        </BrowserRouter>
    )
}

describe("Footer test", () => {
    test("Trending test", () => {
        render(<TestFooter  />)
        let employee = screen.getByRole("heading")

        expect(employee).toBeInTheDocument()
    })

  

   
})