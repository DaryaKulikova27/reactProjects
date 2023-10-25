import React from 'react';
import styles from './menu.module.css';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown 
        button={
          <button className={styles.menuBtn}>
            <MenuIcon />
          </button>
        } 
        onOpen={() => console.log('dropdown is open')}
        onClose={() => console.log('dropdown is close')}>
        <div className={styles.dropdown}>
          Menu
          <button className='btn btn-light btn-sm'>
            Закрыть
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
