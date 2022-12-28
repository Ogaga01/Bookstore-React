import { bookActions } from "./book-slice";

export const fetchBookData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-33284-default-rtdb.firebaseio.com/books.json"
      );

      if (!response) {
        throw new Error("Could not get books");
      }
      const data = response.json();
      return data;
    };
    try {
      const bookData = await fetchData();
      dispatch(
        bookActions.replaceCart({
          books: bookData.books || [],
        })
      );
    } catch (error) {
      
    }
  };
};

export const sendBookData = (books) => {
  return async () => {

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-33284-default-rtdb.firebaseio.com/books.json",
        { method: "PUT", body: JSON.stringify(books) }
      );

      if (!response) {
        throw new Error("Could not send data to books");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      
    }
  };
};
