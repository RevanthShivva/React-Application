import {screen, render} from '@testing-library/react'
import { Editorial } from './Editorial'


describe("Copyrights Test", () => {
    test("Company test", () => {
        render(<Editorial />)
        
        const use = screen.getByText("Editorial")
        expect(use).toBeInTheDocument
    })
})