import {render, screen} from '@testing-library/react';
import BeyondEntre from "./BeyondEntre";
import {BrowserRouter} from 'react-router-dom';
let TestBey = (args: any) => {
    return (
        <BrowserRouter>
            <BeyondEntre {...args} />
        </BrowserRouter>
    )
}
describe("Main Banner test", () => {
    test("Search bar", () => {
        render(<TestBey/>)
        const image = screen.getByText("By Jim Collins and Bill Lazier")
        expect(image).toBeInTheDocument()
    })
   
})