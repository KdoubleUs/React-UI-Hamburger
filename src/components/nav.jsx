import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import data from "./menu";

function NavBar() {
  const [initialState, setState] = useState(false);

  const slideBar = () => setState(!initialState);
  // const pathBtc = () => {
  //   if (item.title == "Search") {
  //   }
  // };
  return (
    <div>
      <div className="navigation">
        <div className="title">
          <h1 className="hbTitle" id="mainTitle">
            Digital CryptoCurrency Search
          </h1>
        </div>
        <Link to="#" className="hamburger">
          <FaIcons.FaBars onClick={slideBar} />
        </Link>
      </div>
      <nav className={initialState ? "nav-menu-active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navToggle">
            <Link to="#" className="close">
              <GrIcons.GrFormClose onClick={slideBar} />
            </Link>
          </li>
          {data.map((items, id) => (
            // <li className="menuList">{items.title}</li>
            <Link to={items.path}>{items.title}</Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
