import React from 'react';
import styles from './card.module.css';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img src={require('../../../img/avatar.png')} alt="avatar" className={styles.avatar} />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной деятельности...</a>
        </h2>
      </div>

      <div className={styles.preview}>
        <img src="https://cdn.dribbble.com/userupload/10596406/file/original-6e3e028bbae17bc47f737521142617be.jpg?resize=752x" className={styles.previewImg} />
      </div>

      <div className={styles.menu}>
        <button className={styles.menuButton}>
          Button
        </button>
      </div>

      <div className={styles.controls} />
    </li>
  );
}
