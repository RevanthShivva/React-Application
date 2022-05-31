import {screen, render} from '@testing-library/react'
import { Company } from './Company'


describe("Company Test", () => {
    test("Compan test", () => {
        render(<Company />)
        
        const use = screen.getByText("Company")
        expect(use).toBeInTheDocument
    })
    test("Company test", () => {
        render(<Company />)
        
        const use = screen.getByText("Partners")
        expect(use).toBeInTheDocument
    })
    test("Company1 test", () => {
        render(<Company />)
        
        const use = screen.getByText("Code of Conduct")
        expect(use).toBeInTheDocument
    })
    
})