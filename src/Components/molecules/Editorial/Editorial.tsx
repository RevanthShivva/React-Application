import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles=makeStyles({
   edit:{
      position : 'relative',
      left : '65px',
   },

    editorial:{

        position: 'static',
        width: '64px',
        height: '24px',
        left: '0px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',     
        color: '#03314B',
        flex: 'none',
        order: '0',
        flexGrow: '0'
        
    },
    element:
    {
        width: '214px',
        height: '24px',
        left: '0px',
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#6D787E',
        marginTop:'16px'
    }
});

export const Editorial:React.FunctionComponent = ()=>
{
    const classes=useStyles();
     return(

        <Grid container sx={{width:"284px",height:"150px"}} direction="row">

            <Grid container direction="column">
                <Grid item>
                 

                    <Grid item className={classes.edit} >
                       <Typography className={classes.editorial} variant="body1">
                           Editorial
                      </Typography>
                    </Grid>

                    <Grid item >
                        <Typography className={classes.element} variant="body2">
                            Book lists
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            What is Nonfiction?
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            What to read next?
                        </Typography>
                     </Grid>

                     <Grid item >
                        <Typography className={classes.element} variant="body2">
                            Benefits of reading
                        </Typography>
                     </Grid>

                   
                    
                </Grid>
            </Grid>

       

       

  
    </Grid>
  

     );
}