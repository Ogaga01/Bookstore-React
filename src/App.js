import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { sendBookData } from "./store/book-action";
import { useDispatch, useSelector } from "react-redux";

let isInitial = true

function App() {
  const books = useSelector((state) => {
    return state.bookSlice.books;
  });

  const dispatch = useDispatch()

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendBookData(books));
  }, [books, dispatch]);

  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      
    </>
  );
}

export default App;
