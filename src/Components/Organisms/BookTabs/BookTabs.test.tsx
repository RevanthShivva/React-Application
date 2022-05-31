import { render, screen } from "@testing-library/react";
import { BookDetails } from "./BookTabs";


describe("Synopsis testing", () => {
    test("Synopsis for tabs", () => {
        render(<BookDetails />)
        const synopsis = screen.getByText(/updates Jim Collins and Bill Lazier’s essential 1992 business handbook/)
       

        expect(synopsis).toBeInTheDocument()
        
    })
})