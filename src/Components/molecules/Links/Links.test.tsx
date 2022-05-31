import {screen, render} from '@testing-library/react'
import { Links } from './Links'


describe("Links Test", () => {
    test("Link test", () => {
        render(<Links />)
        
        const use = screen.getByText("UsefulLinks")
        expect(use).toBeInTheDocument
    })
})