import { styled} from "@mui/material";
import banner from "../../../images/banner.svg";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme/Theme";

const Parent = styled("div")({
    width: 912,
    height: 264,
    backgroundColor:"#F1F6F4",
});



const LeftChild = styled("div")({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: 45,
    left: 45,
    bottom: 45,
    gap: 15,

  });

  const LeftChildHeader = styled("div")({
    width: 500,
    height: 90,
    marginBottom:15,
    marginLeft:-120
    
  });
  
  const LeftChildDescription = styled("div")({
    width: 461,
    height: 69,
    color:"",
    fontSize: 18,
    marginLeft:0
  });

  const ImageContainer = styled("div")({
    position: "relative",
    width: 249,
    height: 230,
    left: 618,
    top: -165,
    
  });

export const MainBanner=() =>{
    return(
     <ThemeProvider theme={theme}>
       <Container>
        <Parent>
          <LeftChild>
            <LeftChildHeader>
              <Typography variant="h1" >
                  Explore Books on entrepreneurship
              </Typography>
            </LeftChildHeader>
            <LeftChildDescription>
              <Typography variant="subtitle2" textAlign="start">
                Everything you need to know about thriving on a <br></br> shoestring budget, making your first million, and <br></br>hiring 
                right from the start.
              </Typography>
            </LeftChildDescription>
          </LeftChild>
          <ImageContainer> 
              <img src={banner} />
          </ImageContainer>
        </Parent>
      </Container>
      </ThemeProvider>
    );
} ;