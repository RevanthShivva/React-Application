import { fireEvent,render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderBar from "./HeaderBar"


test("logo",()=>{

    render(
       <BrowserRouter> <HeaderBar handleChange={undefined} /> </BrowserRouter>
    );
    const image= screen.getByRole("img");
    expect(image).toBeInTheDocument();

});

test("explore",()=>{

    render(
        <BrowserRouter> <HeaderBar handleChange={undefined} /> </BrowserRouter>
    );

    const explore=screen.getByText(/Explore/i);
    expect(explore).toBeInTheDocument();
});

test("library",()=>{

    render(
        <BrowserRouter> <HeaderBar handleChange={undefined} /> </BrowserRouter>
    );

    const mylibrary=screen.getByText(/My Library/i);
    expect(mylibrary).toBeInTheDocument();
});

const onClick = jest.fn()

test('clicking the button toggles an answer on/off', () => {
    render( <BrowserRouter> <HeaderBar handleChange={undefined} /> </BrowserRouter>);
    
    const button = screen.getByTestId('answer')
    fireEvent.click(button)
    
   
    
    expect(screen.getByTestId('logoutt')).toBeInTheDocument()
    
   
 
   
    
});

