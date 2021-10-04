import LibraryBooklist from "./LibraryBookList";
import classes from "./BookData.module.css";
import { useEffect, useState } from "react";

const BookData = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedLibrarydata, setLoadedLibrarydata] = useState();
console.log('loadedLibrarydata',loadedLibrarydata)
  //  const deleteHandler = (id) => {
  //     console.log('deleted');
  //     setLoadedLibrarydata()
  //   const updateditems =
  //      items.filter((arrElem, index)=>{
  //        console.log('props',props)
  //       return index!==id;

  //     })
  //     setItems(updateditems);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://librarymanagement-70ab2-default-rtdb.firebaseio.com/database.json"
    )
      .then((response) => {
        // console.log('response',response.json())
        return response.json();
      })
      .then((data) => {
        const database = [];
        console.log("data", data);
        for (const key in data) {
          const bookdata = {
            id: key,
            ...data[key],
          };
          database.push(bookdata);
        }
        setIsLoading(false);
        setLoadedLibrarydata(database);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Book Data Base</h1>
      <table className={classes.table}>
        <thead>
          <tr className={classes.table_row}>
            <th className={classes.row_heading}>Serial No</th>
            <th className={classes.row_heading}>Pages</th>
            <th className={classes.row_heading}>Book Name</th>
            <th className={classes.row_heading}>Author</th>
            <th className={classes.row_heading}>Publisher</th>
          </tr>
        </thead>
      </table>
      {loadedLibrarydata && loadedLibrarydata.length && (
        <LibraryBooklist database={loadedLibrarydata} />
      )}
    </section>
  );
};
export default BookData;
