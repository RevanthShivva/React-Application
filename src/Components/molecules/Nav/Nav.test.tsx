import { render, screen } from "@testing-library/react";
import  { Nav } from "./Nav";


describe("Nav test", () => {
    test("Navs test", () => {
        render(<Nav  title="Entreprenuership" />)
        const element = screen.getByText("Entreprenuership")
        expect(element).toBeInTheDocument()
    })
})