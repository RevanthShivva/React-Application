import {screen, render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import { ExploreNav } from './ExploreNav'

let TestExtendedNav = () => {
    return (
        <MemoryRouter>
            <ExploreNav />
        </MemoryRouter>
    )
}

describe("Extended Nav Test", () => {
    test("Nav test", () => {
        render(<TestExtendedNav />)
        
        const science = screen.getByText("Science")
        expect(science).toBeInTheDocument
    })
})