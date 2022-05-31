import React from 'react';

export interface IconProps {
    source?: string,
    style?: React.CSSProperties;
}

export const Icons = (props: IconProps) => {
    let {source, style} = props
    return (
        <img src={source} alt="BlinkistLogo"  style={style}></img>
    )
}