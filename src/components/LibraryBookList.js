import { useState } from "react";
import LibraryBook from "./LibraryBook";
import classes from "./LibraryBookList.module.css";
const LibraryBookList = (props) => {
  const [database, setDatabase] = useState(props.database);
  console.log('database',database)
  console.log("props", props);

  const deleteHandler = (bookdataId) => {
    // const newDatabase = [...database];

    // const index = database.findIndex((bookdata) => bookdata.id === bookdataId);

    // newDatabase.splice(index, 1);

    // setDatabase(newDatabase);
    const newDatabase=database.filter((bookdata)=>bookdata.id!==bookdataId)
    setDatabase(newDatabase)
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
