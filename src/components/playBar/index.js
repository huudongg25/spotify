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
import { useContext, useRef } from "react";
import { Songs } from "../../Context";
const cx = classNames.bind(styles);
function PlayBar() {
  const { song, setSong, DataSongs } = useContext(Songs);
  const audioRef = useRef();

  const handlePrev = () => {
    if (song.id > 0) {
      let newId = song.id - 1;
      setSong(DataSongs[newId]);
    } else if (song.id === 0) {
      let newID = DataSongs.length - 1;
      setSong(DataSongs[newID]);
    }
  };
  const handleNext = () => {
    if (song.id < DataSongs.length - 1) {
      let newId = song.id + 1;
      setSong(DataSongs[newId]);
    } else if (song.id === DataSongs.length - 1) {
      let newID = 0;
      setSong(DataSongs[newID]);
    }
  };

  const handlePlay = () => {
    audioRef.current.play();
    console.log(audioRef.current.volume);
  };

  const handleStop = () => {
    audioRef.current.pause();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("song")}>
        <img
          className={cx("song-img")}
          src="https://img.freepik.com/free-vector/spotify-follow-me-social-media-banner-post-template-advertisement-3d-style_94946-75.jpg?w=2000"
          alt="song"
        />
        <div className={cx("song-info")}>
          <h4 className={cx("song-name")}>{song.name}</h4>
          <span className={cx("song-author")}>{song.author}</span>
        </div>
      </div>
      <div className={cx("control")}>
        <div className={cx("control-btn")}>
          <FontAwesomeIcon
            className={cx("control-btn-repeat")}
            icon={faRepeat}
          />
          <FontAwesomeIcon
            onClick={handlePrev}
            className={cx("control-btn-prev")}
            icon={faBackwardStep}
          />
          <FontAwesomeIcon
            onClick={handlePlay}
            className={cx("control-btn-play")}
            icon={faPlay}
          />
          <FontAwesomeIcon
            onClick={handleStop}
            className={cx("control-btn-stop")}
            icon={faStop}
          />
          <FontAwesomeIcon
            onClick={handleNext}
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
            <audio ref={audioRef} id="audio" src={song.url}></audio>
          </div>
        </div>
      </div>

      <div className={cx("volume")}>
        <FontAwesomeIcon icon={faVolumeHigh} />
        <input
          className={cx("volume-input")}
          type="range"
          value="1"
          step="1"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}

export default PlayBar;
