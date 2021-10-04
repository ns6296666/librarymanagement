import { useRef } from "react";
import classes from "./DataBaseForm.module.css";
const DataBaseForm = (props) => {
  const bookNameInputref = useRef();
  const authorInputref = useRef();
  const publisherInputref = useRef();
  const pagesInputref = useRef();
  const serialNoInputref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredBookName = bookNameInputref.current.value;
    const enteredAuthor = authorInputref.current.value;
    const enteredPublisher = publisherInputref.current.value;
    const enteredPages = pagesInputref.current.value;
    const enteredSerialNo = serialNoInputref.current.value;

    const bookData = {
      bookName: enteredBookName,
      author: enteredAuthor,
      publisher: enteredPublisher,
      pages: enteredPages,
      serialNo: enteredSerialNo,
    };
    console.log(bookData)
    props.onAddNewData(bookData);

  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="bookName">Book Name</label>
        <input type="text" required id="Book Name" ref={bookNameInputref} />
      </div>
      <div className={classes.control}>
        <label htmlFor="author">Author</label>
        <input type="text" required id="author" ref={authorInputref} />
      </div>
      <div className={classes.control}>
        <label htmlFor="publisher">Publisher</label>
        <input type="text" required id="publisher" ref={publisherInputref} />
      </div>
      <div className={classes.control}>
        <label htmlFor="no of page">No of Page</label>
        <input type="number" required id="no of page" ref={pagesInputref} />
      </div>
      <div className={classes.control}>
        <label htmlFor="serial number">Serial no</label>
        <input type="number" required id="Book Name" ref={serialNoInputref} />
      </div>
      <div className={classes.actions}>
        <button>Add</button>
      </div>
    </form>
  );
};
export default DataBaseForm;
