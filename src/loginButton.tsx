import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
const useStyles= makeStyles({

})
interface Props{
    onClickFun? : Function;
}
const LoginButton = (props: Props) => {
  const { loginWithRedirect } = useAuth0();
  const classes= useStyles()
  return <Button variant ="contained" onClick={() => loginWithRedirect()} color='success' >Log in </Button>;
};

export default LoginButton;