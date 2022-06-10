import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PlayBar.module.scss";
import classNames from "classnames/bind";
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faRepeat,
  faStop,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function PlayBar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("song")}>
        <img
          className={cx("song-img")}
          src="https://img.freepik.com/free-vector/spotify-follow-me-social-media-banner-post-template-advertisement-3d-style_94946-75.jpg?w=2000"
          alt="song"
        />
        <div className={cx("song-info")}>
          <h4 className={cx("song-name")}>Song name</h4>
          <span className={cx("song-author")}>Author name</span>
        </div>
      </div>
      <div className={cx("control")}>
        <div className={cx("control-btn")}>
          <FontAwesomeIcon
            className={cx("control-btn-repeat")}
            icon={faRepeat}
          />
          <FontAwesomeIcon
            className={cx("control-btn-prev")}
            icon={faBackwardStep}
          />
          <FontAwesomeIcon className={cx("control-btn-play")} icon={faPlay} />
          <FontAwesomeIcon className={cx("control-btn-stop")} icon={faStop} />
          <FontAwesomeIcon
            className={cx("control-btn-next")}
            icon={faForwardStep}
          />
        </div>
        <div className={cx("progress")}>
          <div className={cx("progress-bar")}>
            <input
              className={cx("progress-input")}
              type="range"
              value="0"
              step="1"
              min="0"
              max="100"
            />
            <audio id="audio" src=""></audio>
          </div>
        </div>
      </div>

      <div className={cx("volume")}>
        <FontAwesomeIcon icon={faVolumeHigh} />
        <input
          className={cx("volume-input")}
          type="range"
          value="0"
          step="1"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}

export default PlayBar;
