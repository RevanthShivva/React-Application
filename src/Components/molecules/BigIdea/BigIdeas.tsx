import { Grid, Icon, Typography } from "@mui/material";
import {Icons, IconProps} from "../../atoms/BlinkistLogo/Blinkistlogo";
import { makeStyles } from "@mui/styles";
import BlinkistLogo from "../../../images/blogo.png";

const useStyles=makeStyles({


    bigideas:{
              
       
        position: 'static',
        width: '328',
        height: '64',
        left: '-10px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '26px',
        color: '#0365F2',
        flex: 'none',
        order: '1',
        flexGrow: '0'
    }

});


export const BigIdeas:React.FunctionComponent=()=>
{
    const classes=useStyles();
    return(

        <Grid container  sx={{ width: "378px",height: "128px" }} direction="row"  >

        <Grid item sx={{ height :"26px", width : "124px" }} >
          <Icons source ={BlinkistLogo} />
        </Grid>

        <Grid sx={{marginTop:'32px'}} item>
        <Typography variant="subtitle1"
                        className={classes.bigideas}>
                        Big ideas in small packages. Start learning now
         </Typography>
        </Grid>

    </Grid>


    );
}