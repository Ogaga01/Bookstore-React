import { bookActions } from "./book-slice";
import { uiActions } from "./ui-slice";


export const fetchBookData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bookstore-ababd-default-rtdb.firebaseio.com/books.json"
      );
console.log(Date.now().toString())
      if (!response) {
        throw new Error("Could not get books");
      }
      const data = response.json();
      return data;
    };
    try {
      const booksData = await fetchData();
      dispatch(
        bookActions.replaceCart({
          books: booksData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Could not fetch books",
        })
      );
    }
  };
};

export const sendBookData = (book) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending book",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://bookstore-ababd-default-rtdb.firebaseio.com/books.json",
        { method: "PUT", body: JSON.stringify(book) }
      );

      if (!response) {
        throw new Error("Could not send book");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent book successfully",
        })
      );
    } catch (error) {
      sendBookData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "Error",
            title: "Error",
            message: "Could not send book",
          })
        );
      });
    }
  };
};
