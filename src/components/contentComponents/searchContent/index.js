import DefaultLayout from "../../layout/defaultLayout";
import classNames from "classnames/bind";
import styles from "./SearchContent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlay } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function SearchContent() {
  return (
    <DefaultLayout>
      <div className={cx("wrapper")}>
        <header className={cx("header")}>
          <div className={cx("search-container")}>
            <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
            <input
              className={cx("search-input")}
              placeholder="Artists, Songs and Podcasts"
            />
          </div>
        </header>
        <div className={cx("history")}>
          <h2 className={cx("title")}>Recent Searches</h2>
          <div className={cx("history-search")}>
            <div className={cx("history-group")}>
              <img
                className={cx("history-img")}
                src="https://vatvostudio.vn/wp-content/uploads/2022/01/spotify.jpeg"
                alt="history-img"
              />
              <div className={cx("history-song")}>Song name</div>
              <div className={cx("history-author")}>Author name</div>
            </div>
            <div className={cx("history-group")}>
              <img
                className={cx("history-img")}
                src="https://vatvostudio.vn/wp-content/uploads/2022/01/spotify.jpeg"
                alt="history-img"
              />
              <div className={cx("history-song")}>Song name</div>
              <div className={cx("history-author")}>Author name</div>
            </div>
          </div>
        </div>
        <div className={cx("list-content")}>
          <h3 className={cx("title")}>My Playlist</h3>
          <div className={cx("list-group")}>
            <div className={cx("list-wrapper")}>
              <span className={cx("list-desc")}>1 song liked !</span>
              <h2 className={cx("list-title")}>Song Liked</h2>
              <FontAwesomeIcon className={cx("list-icon")} icon={faPlay} />
            </div>
            <div className={cx("list-wrapper")}>
              <span className={cx("list-desc")}>1 song liked !</span>
              <h2 className={cx("list-title")}>Song Liked</h2>
              <FontAwesomeIcon className={cx("list-icon")} icon={faPlay} />
            </div>
            <div className={cx("list-wrapper")}>
              <span className={cx("list-desc")}>1 song liked !</span>
              <h2 className={cx("list-title")}>Song Liked</h2>
              <FontAwesomeIcon className={cx("list-icon")} icon={faPlay} />
            </div>
          </div>
        </div>

        <div className={cx("list-content")}>
          <h3 className={cx("title")}>My Album</h3>
          <div className={cx("list-group")}>
            <div className={cx("list-wrapper")}>
              <span className={cx("list-desc")}>1 song liked !</span>
              <h2 className={cx("list-title")}>Song Liked</h2>
              <FontAwesomeIcon className={cx("list-icon")} icon={faPlay} />
            </div>
            <div className={cx("list-wrapper")}>
              <span className={cx("list-desc")}>1 song liked !</span>
              <h2 className={cx("list-title")}>Song Liked</h2>
              <FontAwesomeIcon className={cx("list-icon")} icon={faPlay} />
            </div>
            <div className={cx("list-wrapper")}>
              <span className={cx("list-desc")}>1 song liked !</span>
              <h2 className={cx("list-title")}>Song Liked</h2>
              <FontAwesomeIcon className={cx("list-icon")} icon={faPlay} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default SearchContent;
