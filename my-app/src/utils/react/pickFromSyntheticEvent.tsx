import React from 'react';

function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) => 
        <E extends ((t: T[K]) => void)>(fn: E) =>
            (e: React.SyntheticEvent<T>) =>
                fn(e.currentTarget[key]);

}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');

// EXAMPLE

// 1 way
function Input1(props: {onChange: (value: string) => void, value: string}) {
    return (
        <input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
    )
}


// 2 way
function Input2({ onChange, value }: { onChange: (value: string) => void, value: string }) {
    return (
        <input value={value} onChange={getValue(onChange)} />
    )
}