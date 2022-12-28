import React from 'react';
import BookForm from './BookForm';
import BookItem from './BookItem';

const Home = (props) => {
    return (
        <div>
            <BookItem/>
            <BookForm />
        </div>
    );
}

export default Home;