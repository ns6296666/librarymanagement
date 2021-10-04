
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>LibraryBookList</div>
        <nav>
          <ul>
            <li>
              <Link to="/">BookData</Link>
            </li>
            <li>
              <Link to="/new-database">New database</Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
