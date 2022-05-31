import {render, screen} from '@testing-library/react'
import { MainBanner } from "./Banner";
describe("Main Banner test", () => {
    test("Search bar", () => {
        render(<MainBanner/>)
        const image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
    })
})