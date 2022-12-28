import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const Book = (props) => {
  const books = useSelector((state) => {
    return state.bookSlice.books;
  });

  return (
    <ul>
      {books.map((book) => {
        return (
          <BookItem
            key={book.id}
            book={{
              id: book.id,
              title: book.title,
              author: book.author,
              category: book.category,
            }}
          />
        );
      })}
    </ul>
  );
};

export default Book;
