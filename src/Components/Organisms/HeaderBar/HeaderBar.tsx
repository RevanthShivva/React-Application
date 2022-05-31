import { Box,  Button, Grid,    IconButton,    InputAdornment,    TextField,    Typography } from "@mui/material"
import React, { useState }  from "react"
import { makeStyles ,styled } from "@mui/styles"
import {Icons,IconProps} from "../../atoms/BlinkistLogo/Blinkistlogo"
import SearchItem from "../../atoms/SearchItem/SearchItem"
import Avatars from "../../atoms/Avatar/Avatars"
import {  StyledEngineProvider } from "@mui/system"
import BlinkistLogo from "../../../images/blogo.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Link } from "react-router-dom"
import LogoutButton from '../../../Logout'


const MainContainer = styled("div")({
    width: "100%",
    height: 86,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: 40,
    position: 'relative',
    left: 50,
    right:50,
    fontFamily: 'Cera Pro !important'
  });
  const MainContainer2 = styled("div")({
    width: "80%",
    height: 86,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    gap: 40,
    position: 'relative',
    left: 240,
    right:240,
    fontFamily: 'Cera Pro !important'
  });



const useStyles=makeStyles({

    main: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: '1px 1px'
      },

   blinklistlogo:{

    width: 124.09,
    height: 26,
    alignSelf: "center",
    position: "absolute",
    left: 210,
    top: 30,
    
   },

   search:{

    width: 15.31,
    height: 15.31,
    alignSelf: "center",
    position: "absolute",
    left: 327,
    top: 24,
   },
   explore1: {
    alignSelf: "center",
    position: "absolute",
    left: 369,
    top: -5,

  },

   explore:{
      
       height: '20px',
       width: '57px',
       borderRadius: 'nullpx',
       fontFamily: 'Raleway',
       fontSize: '18px',
       fontStyle: 'normal',
       fontWeight: '500',
       lineHeight: '20px',
       letterSpacing: '0em',
       textAlign: 'left',
       color:'#03314B',
       paddingTop:'20px',
       paddingLeft: '20px',
       paddingRight:'5px',
      
                  
       
   },
   expand:
   {
       
       paddingTop:'23.85px',
       height: '20.481667518615723px',
       width: '20.606668472290039px',
       left: '1.6966552734375px',
       borderRadius: '0px',
       color: '#042330',
      
       
   },
   library:
   {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: 'normal',
    alignSelf: "center",
    color: "#03314B",
    left: 504,
    position: "absolute",
    top: 29,
    fontSize: 18,
   
   },
   main1:{
    position: "absolute",
    alignSelf: "center",
    left: 578,
    top: -17,
   },

   account:
   {
   
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#03314B',
    marginLeft: "auto",
    width: 40,
    height: 40,
    display: 'flex', 
    flexDirection: 'row', 
    gap: '1px 1px',
    
    
   },
   expand2:
   {
    height: '20.481667518615723px',
    width: '20.606668472290039px',
    borderRadius: '0px',
    color: '#042330',
    marginLeft:'448px',
    marginTop:'25.85px',
    position: "relative",
    //  alignSelf: "center",
     
      top: 7.5,
   },
   avatar:
   {
       marginLeft:'100px',
       marginTop:'23px',
       
   },
   logout1:{
     zIndex:10,
   },
  
   searchField:
   {

    width:'308px',
    marginLeft:'58px',
    marginTop:'20px',
    fontFamily: 'Raleway',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: '0em',
    textAlign: 'left',
    color:'#03314B',}

});


interface Props{
    handleChange?:any,
    handleSearchTerm?:any,
    closeSearch?:any
}


 const HeaderBar=(props:Props)=>
{

    const classes=useStyles();
    const [search,setSearch]=useState(false);
    let [account, setAccount] =useState(false);

    const expandAccountDropdown = () => {
      account ? setAccount(false) : setAccount(true);
    };

    const handleSearch= ()=>
    {
       setSearch(true);   
    }

    const closeSearch:React.MouseEventHandler<HTMLButtonElement>= ()=>
    {
       setSearch(false);
       props.closeSearch();
    }
     return(

        <>
        <StyledEngineProvider injectFirst>
        <MainContainer>
         <MainContainer2>
         <Box >
           <Box   className={classes.blinklistlogo}>
           < Icons source={BlinkistLogo}/>
           </Box>
           <Box   className={classes.search}>
           <SearchItem handleSearch={handleSearch} />
           </Box>
            {search===true && <>
                <TextField id="search" label="Search by title" onChange={(event)=>props.handleSearchTerm(event,event.target.value) }
 className={classes.searchField} variant="standard" InputProps={{
  endAdornment: (
    <InputAdornment position="end">
      <Button startIcon={  <CloseOutlinedIcon  style={{color:'#3A4649'}}/>}
      onClick={closeSearch} />
    </InputAdornment> 
  ) }}
> </TextField>
            
         </>}

         { search===false && 
           <><Box style={{ marginLeft: '150px' }}>
                         <Box className={classes.explore1}>
                            <Button variant="text" style={{ textTransform: 'initial' }}
                                endIcon={<IconButton>
                                    <KeyboardArrowDownIcon className={classes.expand}
                                    ></KeyboardArrowDownIcon>
                                </IconButton>}
                                onClick={(e) => props.handleChange(e, 1)}
                                sx={{ ':hover': { backgroundColor: '#FFFFFF' } }}
                            >
                                <Typography variant="body1" sx={{ ':hover': { borderBottom: '2px solid #2CE080' } }}
                                        className={classes.explore}>
                                        Explore
                                    </Typography>
                                </Button>

                                </Box> </Box><Box >
                                   <Link to ='/' >
                                    <Typography variant="body1" className={classes.library}>
                                        My Library
                                    </Typography>
                                    </Link>
                            </Box></>
      } <Box className={classes.main1}>
         <Box className={classes.account} >
           <div data-testid="answer" >
              <Button  startIcon={ <Avatars alphabet="R" />    } endIcon= { <IconButton >
                   <KeyboardArrowDownIcon className={classes.expand2}
                      ></KeyboardArrowDownIcon>
                             </IconButton>}
               variant='text' onClick={() => {expandAccountDropdown()}}  >
              </Button>
              </div>
           </Box>
          </Box>
          </Box>
          </MainContainer2>
          </MainContainer>
          <div data-testid='logoutt' className={classes.logout1}>{account ? <LogoutButton  /> : null} </div>
     </StyledEngineProvider>
        </>

    );
}

export default HeaderBar;