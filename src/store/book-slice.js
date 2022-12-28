import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: []
    },
    reducers: {
        addbook(state, action) {
            const newBook = action.payload
            state.books.push({
                id: newBook.id,
                title: newBook.title,
                author: newBook.author,
                category: newBook.category,
            })
        },
        removeBook(state, action) {
            const id = action.payload
            state.books = state.books.filter((book)=>{return book.id !== id})
        }
    }
})

export const bookActions = bookSlice.actions

export default bookSlice.reducer