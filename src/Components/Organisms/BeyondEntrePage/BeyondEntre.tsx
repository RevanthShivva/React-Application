import { Box,Button, createTheme, Grid,    Tab,  Tabs,  ThemeProvider,  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { ReactComponent as Time } from "../../../images/time.svg";
import api from "../../../api/api";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BeyondImage from "../../../images/beyondEntrepreneurship.svg";
import { BookInfo } from "../../molecules/BookCards/Bookcards"
import { Nav } from "../../molecules/Nav/Nav";
import { ButtonComponent } from "../../atoms/Buttons/Button";
import { BookDetails } from "../BookTabs/BookTabs";



const theme=createTheme({

    palette:{
        primary:{
            main:'#2CE080'
        },
        secondary:{
            main:'#03314B'
        }
    }

});

const useStyles=makeStyles({

    Bookname:
    {
        position: 'absolute',
        width: '496px',
        height: '45px',
        left: '278px',
        top: '156px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '36px',
        lineHeight: '45px',
        color: '#03314B',
        
    },
    caption:
    {
        position: 'absolute',
        width: '509px',
        height: '25px',
        left: '218px',
        top: '225px',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '25px',
        color: '#03314B'
    },
    author:
    {
        position: 'absolute',
        width: '209px',
        height: '20px',
        left: '287px',
        top: '274px',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '20px',
        color: '#6D787E'
    },
    readtime:{
        position: 'absolute',
        left: '272px',
        top: '324px',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        textAlign: 'right',
        color: '#6D787E'
    },
   sendtokindle:
   {
    width: '110px',
    height: '20px',
    left: '0px',
    marginTop: '7px',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#6D787E'
    
   },
   image:
   {
              
    position: 'absolute',
    width: '304px',
    height: '304px',
    left: '898px',
    top: '156px'
   },
   readnow:
   {
    position: 'static',
    width: '75px',
    height: '20px',
    left: '0px',
    top: '0px',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px'
   }
   ,
   finishedreading:
   {
    position: 'static',
    left: '12.35%',
    right: '12.35%',
    top: '27.27%',
    bottom: '27.27%',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#03314B'
    
   },
   main:
   {
     
     position: 'absolute',
      
      left: '280px',

        top: '324px',
    },
    main1:{
        display:"flex",
        flexDirection:'row',
    },
   tabname:
   {
          
    position: 'static',
    height: '20px',
    left: '0px',
    top: '0px',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform:'initial',
    '&.Mui-selected': {
        color: '#03314B',
      },
   },
   info:{
        
    position: 'absolute',
    width: '600px',
    height: '100px',
    left: '264px',
    top: '624px',
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#03314B',
    marginTop:'20px'
   }

 });



 const SendToKindles= () =>{

    

 }
 const Buttons= () =>{
     
    const classes=useStyles();
    const [bookInfo, setBookInfo] = useState<BookInfo>({
        id: 1,
        title: "",
        author: "",
        image: "",
        timeToRead: "",
        numberOfReads: "",
        status: {
          isFinished: false,
          isTrending: false,
          justAdded: false,
          isFeatured: false
        }
      });
    
      let getBookInfo = async () => {
        const response = await api.get(`/booksStore/${10}`)
        const data = response.data
        console.log(JSON.stringify(data))
        setBookInfo(data)
      }
    
      useEffect(() => {
        getBookInfo()
      }, [bookInfo.status.isFinished])
    
      
    
      let updateFinish = async (num: number) => {
        bookInfo.status.isFinished = true
        console.log(JSON.stringify(bookInfo))
    
        await api.put(`/booksStore/${num}`, bookInfo)
    
       
      }
    
      let handleRead = async () => {
        
      }

   
    return(
        <>  
        <ThemeProvider theme={theme}>
            <Grid container columnSpacing="15px">

                <Grid item>

                    <Button variant="outlined" style={{textTransform:'initial'}} >
                        <Typography className={classes.readnow}  >
                        Read now
                            </Typography></Button>

                </Grid>

               
                <Grid item>
                
                    <Button variant="contained" style={{textTransform:'initial'}} 
                    onClick={()=>updateFinish(10)}>
                        <Typography className={classes.finishedreading}>
                        Finished Reading
                            </Typography></Button>
                
                                

                </Grid>

                
                <Grid item >

               

                </Grid>

             

            </Grid>

        </ThemeProvider>

        </>

    );
 }

 const BeyondEntre  = () =>{

    const classes= useStyles();

    
    return(
    
        
       <>
         
         <Grid container>

             <Grid item>


                 <Grid container>

                     <Grid item>

                         <Grid item>
                             <Typography fontWeight="bold" variant="h4" className={classes.Bookname}>
                             Beyond Entrepreneurship 2.0
                             </Typography>
                         </Grid>

                         <Grid item>
                             <Typography className={classes.caption}>
                             Turning Your Business into an Enduring Great Company
                             </Typography>
                         </Grid>

                         <Grid item>
                             <Typography className={classes.author}>
                             By Jim Collins and Bill Lazier
                             </Typography>  
                         </Grid>

                         <Grid container item className={classes.main}>
                        
                         <Nav
                              variant="caption"
                              source={<Time />}
                              title='15-minute Read'
                              />
                         
        
                        </Grid>

                        <Grid item style={{marginTop:'385px',marginLeft:'292px'}}>

                            <Buttons /> 

                        </Grid>



                     </Grid>

                 </Grid>


             </Grid>

             <Grid item className={classes.image} >

             <img src={BeyondImage} alt="Beyond Entrepreneurship 2.0"></img>

             </Grid>

             
         </Grid>
         <Grid item style={{marginTop:'10px',marginLeft:'292px'}}>

         <BookDetails />
         
      
         </Grid>
       </>     
       

    );
}
export default BeyondEntre;