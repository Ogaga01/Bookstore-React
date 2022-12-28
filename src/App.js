import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { fetchBookData, sendBookData } from "./store/book-action";

function App() {
  const books = useSelector((state) => { return state.bookSlice.books })

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchBookData())
  }, [dispatch])

  useEffect(() => {
    sendBookData(books)
  }, [books])

  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      
    </>
  );
}

export default App;
