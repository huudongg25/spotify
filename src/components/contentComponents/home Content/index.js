import DefaultLayout from "../../layout/defaultLayout";
import {
  faArrowLeft,
  faArrowRight,
  faArrowRightFromBracket,
  faPlay,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HomeContent.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import SmoothHorizontalScrolling from "../../util";
import { useRef } from "react";
const cx = classNames.bind(styles);

const listImg = [
  "https://i.ytimg.com/vi/D39ZsK_vkU8/maxresdefault.jpg",
  "https://avatar-ex-swe.nixcdn.com/topic/share/2020/08/13/e/9/1/9/1597291430873.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c00293110380289.5feb7f676810d.jpg",
  "https://connect-assets.prosple.com/cdn/ff/GODPYypbPpHvsFSI3T4VoL7uCJaOLXti2ZRNBfgpjxI/1636896022/public/styles/scale_and_crop_center_890x320/public/2021-11/banner-spotify-1786x642-2021.png?itok=pQ1TMWFs",
  "https://avatar-ex-swe.nixcdn.com/topic/share/2020/08/13/e/9/1/9/1597291430873.jpg",
  "https://i.pinimg.com/originals/4f/1a/84/4f1a84c2af22dba4b8715496a435f8f0.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c00293110380289.5feb7f676810d.jpg",
];

function HomeContent() {
  const slideRef = useRef();
  const itemRef = useRef();

  function handleScrollRight() {
    const maxScrollLeft =
      slideRef.current.scrollWidth - itemRef.current.scrollWidth;
    if (slideRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        slideRef.current,
        250,
        itemRef.current.clientWidth * 0.8,
        slideRef.current.scrollLeft
      );
    }
  }

  function handleScrollLeft() {
    if (slideRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        slideRef.current,
        250,
        -itemRef.current.clientWidth,
        slideRef.current.scrollLeft
      );
    }
  }
  return (
    <DefaultLayout>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <div className={cx("search-container")}>
            <input
              placeholder="Search for Artists, Songs and Podcasts"
              type="text"
              className={cx("search-input")}
            />
            <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
          </div>

          <Link to="/">
            <FontAwesomeIcon
              className={cx("exit")}
              icon={faArrowRightFromBracket}
            />
          </Link>
        </div>
        <div className={cx("slide")}>
          <div className={cx("slide-wrapper")}>
            <div ref={slideRef} className={cx("feature-img")}>
              {listImg.map((item, index) => {
                return (
                  <img
                    ref={itemRef}
                    key={index}
                    className={cx("img-slide")}
                    src={item}
                    alt="slide"
                  />
                );
              })}
              <button onClick={handleScrollLeft} className={cx("btn-prev")}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button onClick={handleScrollRight} className={cx("btn-next")}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
        <div className={cx("play-list")}>
          <h2 className={cx("play-title")}>Play List</h2>
          <span className={cx("play-subtitle")}>Music keeps you motivated</span>
          <div className={cx("play-group")}>
            <div className={cx("info-song")}>
              <img
                className={cx("img-song")}
                src="https://i.scdn.co/image/ab67616d0000b273b409df2001f85d6688c40c97"
                alt=""
              />
              <h3 className={cx("desc-song")}>Leave the door open</h3>
              <p className={cx("author-song")}>Bruno Mars</p>

              <FontAwesomeIcon className={cx("play-btn")} icon={faPlay} />
            </div>
            <div className={cx("info-song")}>
              <img
                className={cx("img-song")}
                src="https://i1.sndcdn.com/artworks-001065477745-ypb63j-t500x500.jpg"
                alt=""
              />
              <h3 className={cx("desc-song")}>Indie Việt</h3>
              <p className={cx("author-song")}>Chillies</p>

              <FontAwesomeIcon className={cx("play-btn")} icon={faPlay} />
            </div>
            <div className={cx("info-song")}>
              <img
                className={cx("img-song")}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Gh4cpUTXwrZbdj05Ly5lyDI7nQfSV659UctNQJ52NbYBxj6YDmHNk4VAV-ChXa95bgc&usqp=CAU"
                alt=""
              />
              <h3 className={cx("desc-song")}>US-UK</h3>
              <p className={cx("author-song")}>Justin Bieber </p>

              <FontAwesomeIcon className={cx("play-btn")} icon={faPlay} />
            </div>
            <div className={cx("info-song")}>
              <img
                className={cx("img-song")}
                src="https://i1.sndcdn.com/artworks-000284965394-7s4qko-t500x500.jpg"
                alt=""
              />
              <h3 className={cx("desc-song")}>Back to the 80's</h3>
              <p className={cx("author-song")}>George Michael</p>

              <FontAwesomeIcon className={cx("play-btn")} icon={faPlay} />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default HomeContent;
