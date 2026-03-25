import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RoomGallery from './_RoomGalley';

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("isIta");

  if (savedLang !== null) {
    return savedLang === "true";
  }

  const browserIsItalian = navigator.language.split("-")[0] === "it";
  localStorage.setItem("isIta", String(browserIsItalian));
  return browserIsItalian;
};


const Lilla = () => {
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
    <div className='textGray'>
      <div style={{ overflow: "hidden", height: "75vh" }}>
        <img src={require(`../assets/pics_hero/web-4.jpg`)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>

      <div className='d-flex justify-content-center'>
        <div className='dancing-script-400 text-center py-5 px-3 myMaxW600'>
          <h1 className='textDarkGray'>{isIta ? "Camera Doppia Lilla" : "Lilac Double Room"}</h1>
          <h5 className='fw-light montserrat-400'>
            {
              isIta ?
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa nobis aliquam, ipsum sit ipsam temporibus, repellat nostrum recusandae, error maiores modi optio tempora laboriosam necessitatibus! Quas tempore deleniti enim."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa nobis aliquam, ipsum sit ipsam temporibus, repellat nostrum recusandae, error maiores modi optio tempora laboriosam necessitatibus! Quas tempore deleniti enim."
            }
          </h5>
          <div className='d-flex gap-4 pt-5 justify-content-center montserrat-400'>
            <div className='w-50'>
              <h3 className='dancing-script-400 textDarkGray'>{isIta ? "Superficie" : "Surface"}</h3>
              <h5 className='fw-light'>15 m<sup>2</sup></h5>
            </div>
            <div className='w-50' style={{ borderLeft: "2px solid #888" }}>
              <h3 className='dancing-script-400 textDarkGray'>{isIta ? "Massima Occupazione" : "Maximum Occupancy"}</h3>
              <h5 className='fw-light'>{isIta ? "2 Ospiti" : "2 Guests"}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='py-5 px-3 d-flex flex-wrap gap-4 align-items-center justify-content-center'>
        <img src={require(`../assets/pics_bassa/web-75.jpg`)} alt="" style={{ maxWidth: "530px" }} />
        <div>
          <h1 className='dancing-script-400 fw-bold textDarkGray'>{isIta ? "Self Check-in" : "Self Check-in"}</h1>
          <h5 className='myMaxW600 montserrat-400'>
            {
              isIta ?
                "Per garantire la massima flessibilità e autonomia, la struttura è dotata di un sistema di check-in completamente automatico. L’accesso all’edificio e alle singole camere avviene in modo indipendente, senza necessità di presenza in loco. Ogni stanza è equipaggiata con una maniglia elettronica che può essere aperta tramite codice personale oppure con carta magnetica. Anche l’ingresso principale della struttura è gestito automaticamente, consentendo agli ospiti di entrare in qualsiasi momento in totale sicurezza. Questa soluzione permette un arrivo semplice, veloce e senza attese, ideale per chi viaggia a qualsiasi orario."
                : "To ensure maximum flexibility and independence, the property is equipped with a fully automated self check-in system. Access to both the building and the individual rooms is managed independently, without the need for on-site staff. Each room features an electronic door handle that can be unlocked using a personal code or a key card. The main entrance to the property is also automated, allowing guests to enter at any time in complete safety. This solution ensures a smooth, fast, and hassle-free arrival, ideal for guests arriving at any time."
            }
          </h5>
        </div>
      </div>

      <div className='py-5 text-center myBgLightGray'>
        <h1 className='dancing-script-400 textDarkGray fw-bold'>{isIta ? "Servizi" : "Amenities"}</h1>
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

        </div>
      </div>


      <div className='py-5'>
        <h1 className='dancing-script-400 textDarkGray text-center'>Gallery</h1>
        <RoomGallery start={23} end={38} />
      </div>

    </div>
  )
}

export default Lilla