import classes from "./LibraryBook.module.css";
const LibraryBook = (props) => {
  // const {id,onSelect}=props
  return (
    <li>
      <table className={classes.table}>
        <tbody>
          <tr className={classes.table_row}>
            <td className={classes.row_data}>{props.serialno}</td>
            <td className={classes.row_data}>{props.pages}</td>
            <td className={classes.row_data}>{props.bookname}</td>
            <td className={classes.row_data}>{props.author}</td>
            <td className={classes.row_data}>{props.publisher}</td>
            <td>
              <button className={classes.delete_btn} onClick={() => props.onSelect(props.id)}>
              {/* <button className={classes.delete_btn} onClick={() => props.onSelect(id)}> */}
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};
export default LibraryBook;
