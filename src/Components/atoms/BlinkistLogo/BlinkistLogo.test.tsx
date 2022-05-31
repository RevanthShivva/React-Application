import { render,screen } from "@testing-library/react";
import {Icons} from './Blinkistlogo'


test("Blinklist image should be Blinklistlogo.png",()=>{

    render(
        <Icons />
    );
    const image=screen.getByRole("img");
    expect(image).toBeInTheDocument();

});

test("Blinklist alt should be BlinkList",()=>{

    render(
        <Icons />
    );

    const image=screen.getByRole("img");
    expect(image).toHaveAttribute("alt","BlinkistLogo");

});