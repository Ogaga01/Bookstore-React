import React from "react";
import { useDispatch } from "react-redux";
import styles from '../sass/_bookitem.module.scss'
import { bookActions } from "../store/book-slice";

const BookItem = (props) => {
    const dispatch = useDispatch()

    const {category, title, author, id} = props.book

    const removeBook = () => {
        dispatch(bookActions.removeBook(id))
    }

  return (
    <li className={styles['book-li']}>
      <div className={styles["about-book"]}>
        <div className={styles["book-info"]}>
                  <h3 className={styles.category}>{category}</h3>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.author}>{author}</p>
        </div>
        <div className={styles["book-settings"]}>
          <ul className={styles["settings-list"]}>
            <li className={styles["settings-li"]}>Comment</li>
            <li className={styles["settings-li"]} onClick={removeBook}>Remove</li>
            <li className={styles["settings-li"]}>Edit</li>
          </ul>
        </div>
      </div>
      <div className={styles["book-progress"]}>
        <div className={styles.circle}>
          <div className={styles["empty-div-1"]}>
            <div className={styles["empty-div-2"]}></div>
          </div>
        </div>
        <div className={styles.prg}>
          <h2 className={styles.percent}>50%</h2>
          <p className={styles.completed}>Completed</p>
        </div>
          </div>
          <div className={styles.line}></div>
      <div className={styles["book-chapter"]}>
        <h3 className={styles.chapter}>Current chapter</h3>
        <h3 className={styles.chap}>Chapter 17</h3>
        <button className={styles.update} type="button">Update Progress</button>
      </div>
    </li>
  );
};

export default BookItem;
