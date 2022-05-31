import {render, screen} from '@testing-library/react'
import IconButtonComponent from "./Icon";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";


    test("Should display logo", () => {
        render(<IconButtonComponent children= {< SearchIcon />} />)
        const logo = screen.getByRole("button")
        expect(logo).toBeInTheDocument()
    })
