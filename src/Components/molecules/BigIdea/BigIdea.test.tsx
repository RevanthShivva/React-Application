import {screen, render} from '@testing-library/react'
import { BigIdeas } from './BigIdeas'


describe("Links Test", () => {
    test("Link test", () => {
        render(<BigIdeas />)
        
        const use = screen.getByRole("img")
        expect(use).toBeInTheDocument
    })
})