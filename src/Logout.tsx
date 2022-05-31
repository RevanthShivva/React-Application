import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { styled, makeStyles } from "@mui/styles";

let useStyles = makeStyles({
  logout:{
    
    position: "absolute",
    left:1300,
    top:70,
    zIndex:9
    
  }
})
  

const LogoutButton = () => {
  const { logout,isAuthenticated} = useAuth0();
  const styles=useStyles()

  return (
    <React.Fragment>
    {isAuthenticated && 
    <Button onClick={() => logout()} variant="contained" color="success" className={styles.logout}>
      Log Out
    </Button>
    }
    </React.Fragment>
  )
};

export default LogoutButton;