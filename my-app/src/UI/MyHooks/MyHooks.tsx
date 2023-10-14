import React from 'react';
import styles from './myhooks.module.css';

export function MyHooks({ title, id }: { title: string, id?: string }) {
  // React.useEffect( () => {
  //   console.log('componentDidMount');
  //   console.log('componentWillUpdate');
  // });

  // React.useEffect( () => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);

  // React.useEffect( () => {
  //   console.log('componentWillReceiveProps: ', title);
  // }, [title]);

  const [isMounted] = useIsMounted();
  
  const items = 10;
  const multiplier = 5;
  const result = React.useMemo(
    () => calculate(items, multiplier), 
    [items, multiplier]);

  React.useEffect( () => {
    console.log('isMounted = ', isMounted);
  }, [isMounted]);

  return(
    <div>{title} {id} {result}</div>
  )
}

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect( () => {
    setIsMounted(true);
  }, []);

  return [isMounted];
}

function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((a, v) => a * multiplier);
}
