import { Button } from "@mui/material";
import React from "react";

export interface Props {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    variant?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    className?: string;
}

export const ButtonComponent = (props: any) => {
    let {startIcon, endIcon, variant, style, children, onClick, className} = props
    return (
        <Button 
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        style={style}
        onClick={onClick}
        className={className}>
            {children}
        </Button>
    )
} 