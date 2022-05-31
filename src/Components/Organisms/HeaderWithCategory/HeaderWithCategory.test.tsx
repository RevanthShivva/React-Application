import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderWithCategories from "./HeaderWithCategory";

test("app bar should render blinklist logo",()=>{

    render(
       <BrowserRouter> <HeaderWithCategories handleChange={undefined} /> </BrowserRouter>
    );
    const image= screen.getByRole("img");
    expect(image).toBeInTheDocument();
});

test("app bar should have explore",()=>{

    render(
        <BrowserRouter> <HeaderWithCategories handleChange={undefined} /> </BrowserRouter>
    );
    const explore=screen.getByText("Explore");
    expect(explore).toBeInTheDocument();
});

test("app bar should have My library",()=>{

    render(
        <BrowserRouter> <HeaderWithCategories handleChange={undefined} /> </BrowserRouter>
    );

    const mylibrary=screen.getByText(/My Library/i);
    expect(mylibrary).toBeInTheDocument();
});



test("app bar should have Explore by Category",()=>{

    render(
        <BrowserRouter> <HeaderWithCategories handleChange={undefined} /> </BrowserRouter>
    );

    const explore=screen.getByText("Explore");
    expect(explore).toBeInTheDocument();
});