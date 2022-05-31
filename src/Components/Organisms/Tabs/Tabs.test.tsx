import {screen, render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import { TabsRest } from "./Tabs"

let TestTabs = () => {
    return (
        <MemoryRouter>
            <TabsRest />
        </MemoryRouter>
    )
}

describe("Tabs test", () => {
    test("Is currently test", () => {
        render(<TestTabs />)

        let reading = screen.getByText("Currently Reading")
        expect(reading).toBeInTheDocument()
    });
    test("Is finished test", () => {
        render(<TestTabs />)

        let finished = screen.getByText("Finished")
        expect(finished).toBeInTheDocument()
    });

})