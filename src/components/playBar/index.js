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
import { useContext, useRef, useState } from "react";
import { Songs } from "../../Context";
const cx = classNames.bind(styles);

function PlayBar() {
  const [vol, setVol] = useState(1);
  const [active, setActive] = useState("stopBtn");
  const { song, setSong, DataSongs } = useContext(Songs);
  const audioRef = useRef();
  const progressRef = useRef();

  const handleProgress = () => {
    if (audioRef.current.duration) {
      const progressPercent = Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      progressRef.current.value = progressPercent;
    }
  };

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
    setActive("playBtn");
  };

  const handleStop = () => {
    audioRef.current.pause();
    setActive("stopBtn");
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

  const handleVol = (e) => {
    const newVol = e.target;
    setVol(newVol);
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
            className={
              active === "playBtn"
                ? cx("control-btn-play", "active")
                : cx("control-btn-play")
            }
            icon={faPlay}
          />
          <FontAwesomeIcon
            onClick={handleStop}
            className={
              active === "stopBtn"
                ? cx("control-btn-stop", "active")
                : cx("control-btn-stop")
            }
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
              className={cx("progress-input")}
              type="range"
              value="0"
              step="1"
              min="0"
              max="100"
            ></input>
            <audio
              onEnded={handleEnded}
              onTimeUpdate={handleProgress}
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
          onChange={(e) => handleVol(e.target)}
          className={cx("volume-input")}
          type="range"
          value={vol}
          step="0.1"
          min="0"
          max="1"
        />
      </div>
    </div>
  );
}

export default PlayBar;
