import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './book-slice'

const store = configureStore({
    reducer: {bookSlice: bookReducer}
})

export default store