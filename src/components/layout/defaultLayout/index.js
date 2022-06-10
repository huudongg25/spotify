import SideBar from "../../sideBar";
import PlayBar from "../../playBar";
import styles from "./DefaultLayout.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("side-bar")}>
          <SideBar />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
      <div className={cx("footer")}>
        <PlayBar />
      </div>
    </div>
  );
}

export default DefaultLayout;
