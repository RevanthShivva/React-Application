import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles=makeStyles({
    
    avatar:
    {
        left:'456px',
        top:'23px'
        
    }
});

interface Props{
    alphabet?:string
}

const Avatars= (props:Props)=>{

    const classes=useStyles();

    return(


        <>
          <Avatar sx={{bgcolor:'#69A6E3'}} className={classes.avatar}>{props.alphabet}</Avatar>
        </>

    )
}

export default Avatars;

