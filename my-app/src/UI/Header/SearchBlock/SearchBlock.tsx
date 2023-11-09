import React from 'react';
import styles from './searchblock.module.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
      searchBlock
      <UserBlock />
    </div>
  );
}
