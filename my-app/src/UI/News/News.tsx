import React, { Component, useState } from 'react';
import { useIsMounted } from '../MyHooks';

export function News() {
    const [isMounted] = useIsMounted();
    const [searchQuery, setSearchQuery] = useState("");
    const [resultQuery, setResultQuery] = useState({});

    React.useEffect(() => {
        console.log('isMeounted: ', isMounted);
        doSearchQuery();
    }, [isMounted])
     
    return (<div />)
}

function doSearchQuery() {
        
}

