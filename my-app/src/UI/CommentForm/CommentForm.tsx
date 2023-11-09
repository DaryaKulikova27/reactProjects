import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.module.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState, updateComment } from '../store';

export function CommentForm() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} onChange={handleChange} />
      <button type="submit" className="btn btn-primary">Отправить</button>
    </form>
  );
}
