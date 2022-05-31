import {screen, render} from '@testing-library/react'
import { CopyRights } from './Copyrights'


describe("Copyrights Test", () => {
    test("Company test", () => {
        render(<CopyRights />)
        
        const use = screen.getByText(/Blinkist 2021/)
        expect(use).toBeInTheDocument
    })
})