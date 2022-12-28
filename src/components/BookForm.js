import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from '../sass/_bookform.module.scss'
import { bookActions } from "../store/book-slice";

const BookForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    
    const dispatch = useDispatch()

    const id = (Date.now() + "").slice(-10);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    };
    
    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(bookActions.addbook({title, author, category, id}))

        setTitle('')
        setAuthor('')
        setCategory('')
    }

  return (
    <form onSubmit={submitHandler}>
      <h1 className={styles.heading}>Add New Book</h1>
      <>
        <input
        
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategory}
        />
        <button type="submit"> Add </button>
      </>
    </form>
  );
};

export default BookForm;
