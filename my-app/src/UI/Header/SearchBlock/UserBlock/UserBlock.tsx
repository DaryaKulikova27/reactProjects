import React from 'react';
import styles from './userblock.module.css';
import { AnonymousAvatar } from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
  return (
    <a className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc 
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}  /> 
          : <AnonymousAvatar />
        }
      </div>

      <div className={styles.userName}>
        <span className={styles.userName__text}>{userName || 'Анонимус'}</span>
      </div>

    </a>
  );
}
