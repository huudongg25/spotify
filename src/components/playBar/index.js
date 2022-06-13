import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PlayBar.module.scss";
import classNames from "classnames/bind";
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
  faStop,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef } from "react";
import { Songs } from "../../Context";
const cx = classNames.bind(styles);
function PlayBar() {
  const { song, setSong, DataSongs } = useContext(Songs);
  const audioRef = useRef();
  const progressRef = useRef();

  function handleProgress() {
    if (audioRef.current.duration) {
      const progressPercent = Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      progressRef.current.value = progressPercent;
    }
  }

  function handleSeekTime(e) {
    let seekTime = (audioRef.current.duration / 100) * e.target.value;
    audioRef.current.currentTime = seekTime;
  }

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

  const handleEnded = () => {
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
  };

  const handleStop = () => {
    audioRef.current.pause();
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("song")}>
        <img className={cx("song-img")} src={song.urlimg} alt="song" />
        <div className={cx("song-info")}>
          <h4 className={cx("song-name")}>{song.name}</h4>
          <span className={cx("song-author")}>{song.author}</span>
        </div>
      </div>
      <div className={cx("control")}>
        <div className={cx("control-btn")}>
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
              ref={progressRef}
              onChange={(e) => handleSeekTime(e.target.value)}
              className={cx("progress-input")}
              type="range"
              value="0"
              step="1"
              min="0"
              max="100"
            />
            <audio
              onEnded={handleEnded}
              onTimeUpdate={handleProgress}
              duration
              ref={audioRef}
              id="audio"
              src={song.url}
            ></audio>
          </div>
        </div>
      </div>

      <div className={cx("volume")}>
        <FontAwesomeIcon icon={faVolumeHigh} />
        <input
          className={cx("volume-input")}
          type="range"
          value="0.5"
          step="1"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}

export default PlayBar;
