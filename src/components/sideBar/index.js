import styles from "./SideBar.module.scss";
import classnames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faListSquares,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function SideBar() {
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
          <li className={cx("menu-item")}>
            <Link to="/home">
              <FontAwesomeIcon className={cx("icon")} icon={faHouse} />
              Home
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/search">
              <FontAwesomeIcon className={cx("icon")} icon={faSearch} />
              Search
            </Link>
          </li>
          <li className={cx("menu-item")}>
            <Link to="/library">
              <FontAwesomeIcon className={cx("icon")} icon={faListSquares} />
              Your Library
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
