import React from 'react';
import preventDefault from '../utils/react/preventDefault';
import stopPropagation from '../utils/react/stopPropagation';
import { getValue } from '../utils/react/pickFromSyntheticEvent';

function InputExample({ value, onChange }: any) {
    return(
        <input type="text"
        value={value}
        //onChange={preventDefault(stopPropagation(getValue(onChange)))}
        //onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
        onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
        />
    )
}

// выполняет функции по порядку справа налево
function compose<U>(... fns: Function[]) {
    return <E,>(initialValue: any): U => 
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

// выполняет функции по порядку слева направо
function pipe<U>(... fns: Function[]) {
    return <E,>(initialValue: any): U => 
        fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

// возвращает значение какого-то свойства объекта
function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop];
}

const some = pick('value')({ value: 1 }) // -> 1

function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}

const comments = [{ id: 22, text: 'Text One' }, { id: 44, text: 'Text Two' }];

// way1
const filteredComments1 = comments.filter(({ id }) => id != 22);

//way2
const filteredComments2 = comments.filter(pipe(pick('id'), isEqual(22), cond));

// возвращает обратное значение
function cond(b: boolean) {
    return !b;
}

const filterWithId = (id: number) => pipe(pick('id'), isEqual(id), cond);
const createFilterBy = (prop: string) => (id: number) => pipe(pick('id'), isEqual(id), cond);

// way3
const filterWithId2 = createFilterBy('id');
const filterWithValue = createFilterBy('value');
const filteredComments3 = comments.filter(filterWithId2(22));

