import React from 'react';
import styles from './threadtitle.module.css';
import { useStore } from 'react-redux';
import { RootState } from '../../store';

export function ThreadTitle() {
  const store = useStore<RootState>();
  const value = store.getState().commentText;

  return (
    <h1 className={styles.threadTitle}>{value}</h1>
  );
}
