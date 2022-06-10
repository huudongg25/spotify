import styles from "./Login.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("sponsor")}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Sponsor"
      />
      <Link to="/home" className={cx("login-btn")}>
        LOGIN WITH SPOTIFY
      </Link>
    </div>
  );
}

export default Login;
