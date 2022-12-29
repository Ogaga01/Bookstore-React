import React from 'react';
import Book from './Book';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BookForm from './BookForm';
import Notification from './Notification';
import { fetchBookData } from '../store/book-action';


const Home = (props) => {
    const notification = useSelector((state) => {
        return state.uiSlice.notification
    })

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchBookData());
    }, [dispatch]);

    return (
      <div>
        {notification && (
          <Notification
            status={notification.status}
            message={notification.message}
            title={notification.title}
          />
        )}
        <Book />
        <BookForm />
      </div>
    );
}

export default Home;