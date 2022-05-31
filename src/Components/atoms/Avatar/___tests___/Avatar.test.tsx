import { render,screen } from "@testing-library/react";
import Avatars from "./../Avatars"

test("MyAvatar Alphabet should be A",()=>{

    render(
        <Avatars alphabet="R"/>
    );

     const alphabet = screen.getByText('R');
    
     expect(alphabet).toBeInTheDocument();

});

test("MyAvatar Alphabet should be L",()=>{

    render(
        <Avatars alphabet="L"/>
    );

     const alphabet = screen.getByText('L');

     expect(alphabet).toBeInTheDocument();

});