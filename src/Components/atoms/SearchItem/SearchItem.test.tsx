import { render,screen } from "@testing-library/react";
import SearchItem from './SearchItem'


test("Button should be Blinklistlogo.png",()=>{

    render(
        <SearchItem />
    );
    const but=screen.getByRole("button");
    expect(but).toBeInTheDocument();

});