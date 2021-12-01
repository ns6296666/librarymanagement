import { useState } from "react";
import LibraryBook from "./LibraryBook";
import classes from "./LibraryBookList.module.css";
const LibraryBookList = (props) => {
  const [database, setDatabase] = useState(props.database);
  console.log("database", database);
  console.log("props", props);

  const deleteHandler = (bookdataId) => {
    fetch(
      "https://librarymanagement-70ab2-default-rtdb.firebaseio.com/database/" +
        bookdataId +
        ".json",
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then(() => window.location.reload());
  };

  return (
    <ul className={classes.list}>
      {props.database.map((bookdata) => (
        <LibraryBook
          key={bookdata.id}
          id={bookdata.id}
          bookname={bookdata.bookName}
          author={bookdata.author}
          publisher={bookdata.publisher}
          pages={bookdata.pages}
          serialno={bookdata.serialNo}
          onSelect={deleteHandler}
        />
      ))}
    </ul>
  );
};
export default LibraryBookList;
