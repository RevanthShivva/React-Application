import {render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import {BookCard } from "./Bookcards";

let TestCard = (args: any) => {
    return (
        <BrowserRouter>
            <BookCard {...args} />
        </BrowserRouter>
    )
}

describe("Card test", () => {
   

    test("Read again card", () => {
         render(<TestCard value={1} title="Test Card" author="Test author" isFinished={false} readAgain={true} />)

        const title = screen.getByText("Test Card")
        expect(title).toBeInTheDocument()

        const author = screen.getByText("Test author")
        expect(author).toBeInTheDocument()
        
       

      
    })

    test("Add To Library card test", () => {
        render(<TestCard value={1} title="Test Card" author="Test author"  timeToRead="17-minute read" isFinished={false} addToLibrary={true} />)

        const title = screen.getByText("Test Card")
        expect(title).toBeInTheDocument()

        const author = screen.getByText("Test author")
        expect(author).toBeInTheDocument()

        const addToLibrary = screen.getByText("Add To Library")
        expect(addToLibrary).toBeInTheDocument()


        const timeToRead = screen.getByText("17-minute read")
        expect(timeToRead).toBeInTheDocument()
    })
})
test("Add To Library card test", () => {
    render(<TestCard value={1} title="Test Card" author="Test author"  timeToRead="17-minute read" isFinished={false} addToLibrary={true} />)

    const title = screen.getByTestId("addLib")
    expect(title).toBeInTheDocument()

    
})


