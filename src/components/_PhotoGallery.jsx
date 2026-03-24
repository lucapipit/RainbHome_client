import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const TOTAL_IMAGES = 75;
const SWIPE_THRESHOLD = 50;
const FADE_DURATION = 180;

// carica tutte le immagini dalla cartella
const req = require.context('../assets/pics_medium', false, /\.jpg$/);

const imageMap = req.keys().reduce((acc, path) => {
  const match = path.match(/web-(\d+)\.jpg$/);
  if (match) {
    acc[match[1]] = req(path);
  }
  return acc;
}, {});

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("isIta");

  if (savedLang !== null) {
    return savedLang === "true";
  }

  const browserIsItalian = navigator.language.split("-")[0] === "it";
  localStorage.setItem("isIta", String(browserIsItalian));
  return browserIsItalian;
};

const _PhotoGallery = () => {
  const [focusImg, setFocusImg] = useState(null);
  const [displayImg, setDisplayImg] = useState(null);
  const [isFading, setIsFading] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState({});
  const [mainImgLoaded, setMainImgLoaded] = useState(false);
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

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const fadeTimeout = useRef(null);

  const images = useMemo(() => {
    return Array.from({ length: TOTAL_IMAGES }, (_, i) =>
      String(i + 1).padStart(2, '0')
    );
  }, []);

  const currentIndex = displayImg ? images.indexOf(displayImg) : -1;

  const handleThumbLoad = (num) => {
    setThumbLoaded((prev) => ({
      ...prev,
      [num]: true
    }));
  };

  const openImage = (img) => {
    setMainImgLoaded(false);
    setFocusImg(img);
    setDisplayImg(img);
  };

  const closeImage = () => {
    setFocusImg(null);
    setDisplayImg(null);
    setIsFading(false);
    setMainImgLoaded(false);
  };

  const changeImage = (nextImg) => {
    if (!nextImg || nextImg === displayImg) return;

    setIsFading(true);

    clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setMainImgLoaded(false);
      setDisplayImg(nextImg);
      setFocusImg(nextImg);

      requestAnimationFrame(() => {
        setIsFading(false);
      });
    }, FADE_DURATION);
  };

  const goPrev = () => {
    if (currentIndex > 0 && !isFading) {
      changeImage(images[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (currentIndex < images.length - 1 && !isFading) {
      changeImage(images[currentIndex + 1]);
    }
  };

  useEffect(() => {
    document.body.style.overflow = focusImg ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
      clearTimeout(fadeTimeout.current);
    };
  }, [focusImg]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!displayImg) return;

      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [displayImg, currentIndex, isFading]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) < SWIPE_THRESHOLD || isFading) return;

    if (diff > 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  return (
    <div>
      <h1 className='dancing-script-400 text-center pt-5 textDarkGray'>{isIta ? "Galleria" : "Gallery"}</h1>
      <div className="py-4 px-2 d-flex flex-wrap justify-content-center">
        {images.map((num) => (
          <div
            key={num}
            className="myMaxH260 myMaxW400 myOverflowY mt-1 me-1 d-flex align-items-center justify-content-center myCursor position-relative galleryThumb"
            onClick={() => openImage(num)}
          >
            {!thumbLoaded[num] && (
              <div className="gallerySpinner">
                <Spinner animation="border" variant="light" />
              </div>
            )}

            <img
              loading="lazy"
              className="w-100 galleryThumbImg"
              src={imageMap[num]}
              alt={`Gallery ${num}`}
              onLoad={() => handleThumbLoad(num)}
              style={{
                opacity: thumbLoaded[num] ? 1 : 0,
                transition: 'opacity 0.25s ease'
              }}
            />
          </div>
        ))}
      </div>

      {displayImg && (
        <div className="galleryLightbox" onClick={closeImage}>
          <button
            className="galleryCloseBtn"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
            aria-label="Close gallery"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <button
            className="galleryArrow galleryArrowLeft d-none d-md-flex"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            disabled={currentIndex === 0 || isFading}
            aria-label="Previous image"
          >
            <i className="bi bi-caret-left-fill"></i>
          </button>

          <div
            className="galleryImageStage"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="galleryImageWrapper">
              {!mainImgLoaded && (
                <div className="gallerySpinner">
                  <Spinner animation="border" variant="light" />
                </div>
              )}

              <img
                key={displayImg}
                className={`galleryFocusedImg ${isFading || !mainImgLoaded
                  ? 'galleryFocusedImgHidden'
                  : 'galleryFocusedImgVisible'
                  }`}
                src={imageMap[displayImg]}
                alt={`Gallery ${displayImg}`}
                onLoad={() => setMainImgLoaded(true)}
                draggable="false"
              />
            </div>

            <div className="galleryCounter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          <button
            className="galleryArrow galleryArrowRight d-none d-md-flex"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            disabled={currentIndex === images.length - 1 || isFading}
            aria-label="Next image"
          >
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default _PhotoGallery;