import React from 'react';
import { preventDefault } from './preventDefault';
import { stopPropagation } from './stopPropagation';


// 1way
function NotStandardLink1(props: any) {
    const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        e.preventDefault();
        props.onClick();
    }

    return (
        <a onClick={handleClick}>Hello</a>
    )
}

// 2way
function NotStandardLink2(props: any) {
    return (
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    )
}