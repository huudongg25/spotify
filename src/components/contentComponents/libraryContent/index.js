import classNames from "classnames/bind";
import styles from "./LibraryContent.module.scss";
import DefaultLayout from "../../layout/defaultLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Songs } from "../../../Context";

const cx = classNames.bind(styles);

function LibraryContent() {
  const { DataSongs, setSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    setSong(idSong);
  };

  return (
    <DefaultLayout>
      <div className={cx("wrapper")}>
        <div className={cx("search")}>
          <div className={cx("search-container")}>
            <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
            <input
              className={cx("search-input")}
              placeholder="Artists,Songs and Podcasts"
            />
          </div>
        </div>

        <div className={cx("category")}>
          <table className={cx("table")}>
            <thead>
              <tr>
                <th className={cx("thead")}>No</th>
                <th className={cx("thead")}>Title</th>
                <th className={cx("thead")}>Author</th>
              </tr>
            </thead>
            <tbody>
              {DataSongs.map((song, index) => {
                return (
                  <tr
                    className={cx("tbody-container")}
                    key={index}
                    onClick={() => handlePlaySong(song)}
                  >
                    <td className={cx("tbody")}>{index + 1}</td>
                    <td className={cx("tbody-song")}>{song.name}</td>
                    <td className={cx("tbody-author")}>{song.author}</td>
                    <FontAwesomeIcon
                      className={cx("play-icon")}
                      icon={faPlay}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default LibraryContent;
