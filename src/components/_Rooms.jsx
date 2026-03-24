import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import tiffany from "../assets/pics_hero/web-3.jpg";
import yellow from "../assets/pics_hero/web-1.jpg";
import bluette from "../assets/pics_hero/web-2.jpg";
import lilla from "../assets/pics_hero/web-4.jpg";
import _SharedArea from './_SharedArea';

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("isIta");

  if (savedLang !== null) {
    return savedLang === "true";
  }

  const browserIsItalian = navigator.language.split("-")[0] === "it";
  localStorage.setItem("isIta", String(browserIsItalian));
  return browserIsItalian;
};

const _Rooms = () => {
  const [hover, setHover] = useState(false);
  const [isIta, setIsIta] = useState(getInitialLanguage);

  useEffect(() => {
    const syncLanguage = () => {
      setIsIta(localStorage.getItem("isIta") === "true");
    };

    window.addEventListener("languageChanged", syncLanguage);

    return () => {
      window.removeEventListener("languageChanged", syncLanguage);
    };
  }, []);

  return (
    <div>

      <div className='p-3 d-flex flex-column gap-1 dancing-script-400'>

        <div className='d-flex flex-wrap gap-1 justify-content-center'>
          <Link to="/tiffany">
            <div
              className={`position-relative roomsImgContainer ${hover === "textTiffany" ? hover : "text-light"}`}
              onMouseEnter={() => setHover("textTiffany")}
              onMouseLeave={() => setHover(false)}
            >
              <div className='roomsOverlay d-flex justify-content-center align-items-end pb-4'>
                <h1>{isIta ? "Camera Tiffany" : "Tiffany Room"}</h1>
              </div>
              <img className='roomsImg' src={tiffany} alt={isIta ? "Camera doppia Tiffany" : "Tiffany double room"} />
            </div>
          </Link>

          <Link to="/lilla">
            <div
              className={`position-relative roomsImgContainer ${hover === "textLilla" ? hover : "text-light"}`}
              onMouseEnter={() => setHover("textLilla")}
              onMouseLeave={() => setHover(false)}
            >
              <div className='roomsOverlay d-flex justify-content-center align-items-end pb-4'>
                <h1>{isIta ? "Camera Lilla" : "Lilac Room"}</h1>
              </div>
              <img className='roomsImg' src={lilla} alt={isIta ? "Camera lilla" : "Lilac room"} />
            </div>
          </Link>
        </div>

        <div className='d-flex flex-wrap gap-1 justify-content-center'>
          <Link to="/yellow">
            <div
              className={`position-relative roomsImgContainer ${hover === "textYellow" ? hover : "text-light"}`}
              onMouseEnter={() => setHover("textYellow")}
              onMouseLeave={() => setHover(false)}
            >
              <div className='roomsOverlay d-flex justify-content-center align-items-end pb-4'>
                <h1>{isIta ? "Camera Gialla" : "Yellow Room"}</h1>
              </div>
              <img className='roomsImg' src={yellow} alt={isIta ? "Camera gialla" : "Yellow room"} />
            </div>
          </Link>

          <Link to="/bluette">
            <div
              className={`position-relative roomsImgContainer ${hover === "textBluette" ? hover : "text-light"}`}
              onMouseEnter={() => setHover("textBluette")}
              onMouseLeave={() => setHover(false)}
            >
              <div className='roomsOverlay d-flex justify-content-center align-items-end pb-4'>
                <h1>{isIta ? "Camera Bluette" : "Bluette Room"}</h1>
              </div>
              <img className='roomsImg' src={bluette} alt={isIta ? "Camera bluette" : "Bluette room"} />
            </div>
          </Link>
        </div>

      </div>

      <div>
        <_SharedArea />
      </div>
    </div >
  )
}

export default _Rooms