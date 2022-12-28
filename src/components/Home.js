import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const Home = (props) => {
    return (
        <div>
            <Book/>
            <BookForm />
        </div>
    );
}

export default Home;