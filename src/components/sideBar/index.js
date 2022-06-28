import styles from "./SideBar.module.scss";
import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classnames.bind(styles);

let curTab = "tab-1";

function SideBar() {
  const [tabs, setTabs] = useState(curTab);

  const handleSetTab1 = () => {
    setTabs("tab-1");
    curTab = "tab-1";
  };
  const handleSetTab2 = () => {
    setTabs("tab-2");
    curTab = "tab-2";
  };
  const handleSetTab3 = () => {
    setTabs("tab-3");
    curTab = "tab-3";
  };

  return (
    <div className={cx("wrapper")}>
      <header>
        <img
          className={cx("logo")}
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="sponsor"
        />
      </header>
      <div className={cx("container")}>
        <ul className={cx("menu")}>
          <Link to="/home">
            <li
              onClick={handleSetTab1}
              className={
                tabs === "tab-1" ? cx("menu-item", "active") : cx("menu-item")
              }
            >
              <FontAwesomeIcon className={cx("icon")} icon={faHouse} />
              Home
            </li>
          </Link>
          <Link to="/search">
            <li
              onClick={handleSetTab2}
              className={
                tabs === "tab-2" ? cx("menu-item", "active") : cx("menu-item")
              }
            >
              <FontAwesomeIcon className={cx("icon")} icon={faSearch} />
              Search
            </li>
          </Link>
          <Link to="/library">
            <li
              onClick={handleSetTab3}
              className={
                tabs === "tab-3" ? cx("menu-item", "active") : cx("menu-item")
              }
            >
              <FontAwesomeIcon className={cx("icon")} icon={faListSquares} />
              Your Library
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
