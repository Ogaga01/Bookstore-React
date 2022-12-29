import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './book-slice'
import uiReducer from './ui-slice'

const store = configureStore({
    reducer: {bookSlice: bookReducer, uiSlice: uiReducer}
})

export default store