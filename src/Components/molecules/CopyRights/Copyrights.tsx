
  
import {  Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles=makeStyles({
    edit:{
        position : 'relative',
        left : '0px',
     },

    textstyle:
    {
        position: 'static',
        width: '546px',
        height: '22px',
        left: '244px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '22px',
        color: '#6D787E',
        flex: 'none',
        
    }

});

export const CopyRights:React.FunctionComponent = ()=>
{
    const classes=useStyles();

    return(

        <React.Fragment>
           <div className={classes.edit}>
            <Typography className={classes.textstyle} variant="caption" fontWeight="400">
            © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
            </div>
            </React.Fragment>

    );
}