import React from 'react'
import IconButton from "@mui/material/IconButton";

interface IconButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const IconButtonComponent = (props: IconButtonProps) => {
  let {children,  onClick} = props
  return (
    <IconButton
      onClick={onClick}
     
    >
      {children}
    </IconButton>
  )
}

export default IconButtonComponent