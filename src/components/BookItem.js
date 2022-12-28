import React from "react";

const BookItem = (props) => {
  return (
    <li>
      <div className={styles["about-book"]}>
        <div className={styles["book-info"]}>
          <h3 className={styles.category}>Category</h3>
          <h2 className={styles.title}>Title</h2>
          <p className={styles.author}>Author</p>
        </div>
        <div className={styles["book-settings"]}>
          <ul className={styles["settings-list"]}>
            <li className={styles["settings-li"]}>Comment</li>
            <li className={styles["settings-li"]}>Remove</li>
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
        <div>
          <h2 className={styles.percent}>50%</h2>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div className={styles["book-chapter"]}>
        <h3 className={styles.chapter}>Current chapter</h3>
        <h3 className={styles.chap}>Chapter 17</h3>
        <button className="{styles.update" type="button">Update Progress</button>
      </div>
    </li>
  );
};

export default BookItem;
