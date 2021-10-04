

import { useHistory } from "react-router";
import DataBaseForm from "../DataBaseForm";

const NewDataBase = () => {
  const history=useHistory();
  
  const addDataHandler = (bookData) => {
    console.log('bookData',bookData);
    fetch(
      "https://librarymanagement-70ab2-default-rtdb.firebaseio.com/database.json",
      {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(()=>{
history.replace('/')

    })
  };
  return (
    <section>
      <DataBaseForm onAddNewData={addDataHandler} />
    </section>
  );
};
export default NewDataBase;
