import BeyondEntre from './Components/Organisms/BeyondEntrePage/BeyondEntre';
import HeaderBar from './Components/Organisms/HeaderBar/HeaderBar';
import HeaderWithCategories from './Components/Organisms/HeaderWithCategory/HeaderWithCategory';
import { Footer } from './Components/Organisms/Footer/Footer';
import { styled } from "@mui/styles";
import { useState } from 'react';
import {Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Components/Theme/Theme";

let useStyles = makeStyles({
    SynopsisTypography:{
        lineHeight: "20.11px ",
        fontSize: "20px !important",
        color: '#03314B !important',
        position: 'relative',
       fontWeight:"400",
        fontFamily:'Cera Pro'
    },
    Egg:{
        position: "relative",
        left: -305,
        top: 70,
    }
})
let BodyComponent = styled("div")({
  position: "relative",
  left: 230,
  top: -30,
});

let FooterComponent = styled("div")({
    position: 'relative',
    top: 177
})

export const BookView = () => {
    let styles = useStyles()
  
  const [value,setValue]=useState(0);

    const handleChange=(e:React.MouseEventHandler<SVGSVGElement>,newValue: number)=>{
     setValue(newValue);
     
   }
  return (
    <>
     <ThemeProvider theme={theme}>
       {value ===0 &&   <HeaderBar handleChange={handleChange}/>}
         {value === 1 && <HeaderWithCategories handleChange={handleChange} />}
       <div className={styles.Egg}>
         <Typography variant="body2" className={styles.SynopsisTypography}>
         Get the key ideas from
         </Typography>
         </div>
      <BodyComponent><BeyondEntre /></BodyComponent>
      <FooterComponent><Footer /></FooterComponent>
      </ThemeProvider>
    </>
  );
}