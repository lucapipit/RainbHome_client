import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../assets/logo-xl.png";
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

const _Home = () => {
  const [index, setIndex] = useState(0);
  const [isIta, setIsIta] = useState(getInitialLanguage);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

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
      <Carousel
        className="heroCarousel h-100 dancing-script-400"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <a href="/tiffany">
            <div className='overflowImg'>
              <img
                src={tiffany}
                alt={isIta ? "Camera Doppia Tiffany" : "Tiffany Double Room"}
              />
            </div>
          </a>
          <Carousel.Caption>
            <h1>{isIta ? "Camera Doppia Tiffany" : "Tiffany Double Room"}</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/lilla">
            <div className='overflowImg border'>
              <img
                src={lilla}
                alt={isIta ? "Camera Doppia Lilla" : "Lilac Double Room"}
              />
            </div>
          </a>
          <Carousel.Caption>
            <h1>{isIta ? "Camera Doppia Lilla" : "Lilac Double Room"}</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/yellow">
            <div className='overflowImg'>
              <img
                src={yellow}
                alt={isIta ? "Camera Doppia Gialla" : "Yellow Double Room"}
              />
            </div>
          </a>
          <Carousel.Caption>
            <h1>{isIta ? "Camera Doppia Gialla" : "Yellow Double Room"}</h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <a href="/bluette">
            <div className='overflowImg'>
              <img
                src={bluette}
                alt={isIta ? "Camera Singola Bluette" : "Bluette Single Room"}
              />
            </div>
          </a>
          <Carousel.Caption>
            <h1>{isIta ? "Camera Singola Bluette" : "Bluette Single Room"}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className='dancing-script-400 text-secondary text-center pt-5'>
        {isIta ? "Il vostro angolo di casa a Roma" : "Your home away from home in Rome"}
      </h1>

      <div
        className='p-4 pb-5 montserrat-400 d-flex flex-column align-items-center'
        style={{ color: "#444" }}
      >
        <div>
          <i className="bi bi-droplet-fill textBlue"></i>{" "}
          <b>{isIta ? "Bagno privato" : "Private bathroom"}</b>{" "}
          {isIta ? "con doccia." : "with shower."}
        </div>

        <div>
          <i className="bi bi-geo-alt-fill textLilla"></i>{" "}
          {isIta ? (
            <>A pochi passi dalla <b>Metro Policlinico</b>.</>
          ) : (
            <>Just a few steps from <b>Policlinico Metro Station</b>.</>
          )}
        </div>

        <div>
          <i className="bi bi-geo-fill textTiffany"></i>{" "}
          {isIta ? (
            <>A 20 min a piedi da <b>Stazione Termini</b> e <b>Tiburtina</b>.</>
          ) : (
            <>20 minutes on foot from <b>Termini</b> and <b>Tiburtina</b> stations.</>
          )}
        </div>

        <div>
          <i className="bi bi-wifi textYellow"></i> <b>Wi-Fi</b>{" "}
          {isIta ? "gratuito." : "free."}
        </div>

        <div>
          <i className="bi bi-person-hearts textLilla"></i>{" "}
          <b>{isIta ? "Accoglienza Dedicata" : "Dedicated hospitality"}</b>{" "}
          {isIta ? "per il soggiorno." : "throughout your stay."}
        </div>

        <div>
          <i className="bi bi-key-fill textBlue"></i>{" "}
          {isIta ? (
            <>Possibilità di <b>Self Check-in</b>.</>
          ) : (
            <>Option for <b>self check-in</b>.</>
          )}
        </div>

        <div>
          <i className="bi bi-tv-fill textTiffany"></i> <b>Smart TV</b>.
        </div>

        <div>
          <i className="bi bi-cup-hot-fill textYellow"></i>{" "}
          {isIta ? (
            <>Macchina del <b>Caffè</b> Nespresso.</>
          ) : (
            <>Nespresso <b>coffee machine</b>.</>
          )}
        </div>

        <div>
          <i className="bi bi-tencent-qq textBlue"></i>{" "}
          <b>{isIta ? "Frigorifero" : "Refrigerator"}</b>.
        </div>
      </div>

      <div className='p-4 py-5 d-flex flex-column align-items-center myBgLightGray'>
        <div>
          <img src={logo} alt="RainbHome Logo" style={{ height: 100 }} />
        </div>

        <h5 className='montserrat-300 w-100 myMaxW900 pb-4'>
          {isIta ? (
            <>
              Benvenuti a <b>RainbHome</b>, il vostro angolo colorato nel cuore di Roma!
              A pochi passi dalla Metro Policlinico e nel cuore della zona universitaria de La Sapienza,
              RainbHome offre una posizione sicura e ben collegata, equidistante dalle <b>Stazioni di Roma Termini</b> e <b>Roma Tiburtina</b>,
              raggiungibili in pochi minuti di metro, autobus o a piedi.

              <br /><br />

              La casa dispone di una zona comune accogliente con macchinetta Nespresso e frigorifero condiviso,
              pensata per momenti di pausa in un’atmosfera rilassata e curata.

              <br /><br />

              Le camere sono quattro – tre doppie e una singola – tutte con bagno privato, smart TV, asciugacapelli,
              armadio e scrivania. Ogni stanza ha un colore unico che le dona personalità: da qui il nome RainbHome,
              un luogo vivace e colorato che unisce l’allegria dell’arcobaleno al calore di una vera casa.

              <br /><br />

              Qui troverete uno spazio dove sentirvi accolti e a vostro agio, ideale per chi cerca semplicità,
              calore e autenticità nel cuore di Roma. 🌈
            </>
          ) : (
            <>
              Welcome to <b>RainbHome</b>, your colorful corner in the heart of Rome!
              Just a short walk from Policlinico Metro Station and in the heart of the La Sapienza university district,
              RainbHome offers a safe and well-connected location, conveniently positioned between <b>Rome Termini</b> and <b>Rome Tiburtina</b> stations,
              both reachable in just a few minutes by metro, bus, or on foot.

              <br /><br />

              The house features a cozy common area with a Nespresso machine and shared refrigerator,
              designed for relaxing breaks in a warm and pleasant atmosphere.

              <br /><br />

              There are four rooms – three double rooms and one single room – all with private bathroom, smart TV,
              hairdryer, wardrobe, and desk. Each room has its own unique color and personality:
              this is where the name RainbHome comes from, a lively and colorful place that combines the joy of the rainbow
              with the warmth of a true home.

              <br /><br />

              Here you will find a place where you can feel welcomed and comfortable, ideal for anyone looking for simplicity,
              warmth, and authenticity in the heart of Rome. 🌈
            </>
          )}
        </h5>
      </div>

      <div>
        <_SharedArea />
      </div>
    </div>
  );
};

export default _Home;