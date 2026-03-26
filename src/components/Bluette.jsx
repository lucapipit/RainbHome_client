import React, { useEffect, useState } from 'react';
import RoomGallery from './_RoomGalley';
import SelfCheckin from './SelfCheckin';

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("isIta");

  if (savedLang !== null) {
    return savedLang === "true";
  }

  const browserIsItalian = navigator.language.split("-")[0] === "it";
  localStorage.setItem("isIta", String(browserIsItalian));
  return browserIsItalian;
};


const Bluette = () => {
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
        <img src={require(`../assets/pics_hero/web-8.jpg`)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>

      <div className='d-flex justify-content-center'>
        <div className='dancing-script-400 text-center py-5 px-3 myMaxW900'>
          <h1 className='textDarkGray'>{isIta ? "Camera Singola Bluette" : "Bluette Single Room"}</h1>
          <h5 className='fw-light montserrat-400'>
            {
              isIta ?
                "La Camera Bluette è la nostra camera singola, accogliente e curata nei dettagli. Il bluette è il colore della profondità e della tranquillità: ispira fiducia, stabilità e quiete, avvolgendo l’ambiente in una piacevole sensazione di calma. Dispone di un comodo letto alla francese, armadio, scrivania, poggia valigia e Smart TV. Il bagno privato in camera, sprovvisto di bidet, è dotato di doccia, set di asciugamani, bagnodoccia e asciugacapelli. La stanza è completa di aria condizionata e riscaldamento indipendenti, per garantire il massimo comfort in ogni stagione. Intima e funzionale, è la soluzione ideale per chi viaggia da solo e desidera uno spazio confortevole, curato e rilassante. 💙"
                : "The Bluette Room is our single room, cozy and carefully designed with attention to detail; bluette, a deep shade of blue, symbolizes depth and tranquility, inspiring a sense of trust, stability, and calm, and enveloping the space in a relaxing atmosphere; the room features a comfortable French bed, wardrobe, desk, luggage rack, and Smart TV; the private en-suite bathroom, without a bidet, includes a shower, towels, body wash, and a hairdryer; the room is equipped with independent air conditioning and heating to ensure maximum comfort in every season; intimate and functional, it is the ideal solution for solo travelers looking for a comfortable, well-designed, and relaxing space. 💙"
            }
          </h5>
          <div className='d-flex gap-4 pt-5 justify-content-center montserrat-400'>
            <div className='w-50'>
              <h3 className='dancing-script-400 textDarkGray'>{isIta ? "Superficie" : "Surface"}</h3>
              <h5 className='fw-light'>10 m<sup>2</sup></h5>
            </div>
            <div className='w-50' style={{ borderLeft: "2px solid #888" }}>
              <h3 className='dancing-script-400 textDarkGray'>{isIta ? "Massima Occupazione" : "Maximum Occupancy"}</h3>
              <h5 className='fw-light'>{isIta ? "1 Ospite" : "1 Guest"}</h5>
            </div>
          </div>
        </div>
      </div>

      <SelfCheckin isIta={isIta}/>

      <div className='py-5 text-center myBgLightGray'>
        <h1 className='dancing-script-400 textDarkGray fw-bold'>{isIta ? "Servizi" : "Amenities"}</h1>
        <div
          className='p-4 pb-5 montserrat-400 d-flex flex-column align-items-center'
          style={{ color: "#444" }}
        >
          <div>
            <i className="bi bi-droplet-fill textBlue"></i>{" "}
            {isIta ? "Bagno privato" : "En-suite bathroom"}{" "}
            {isIta ? "con doccia." : "with shower."}
          </div>

        <div>
          <i className="bi bi-wifi textYellow"></i>{" "}
          {isIta ? (
            <>Wi-Fi gratuito</>
          ) : (
            <>Free Wi-Fi</>
          )}
        </div>

          <div>
            <i className="bi bi-person-hearts textLilla"></i>{" "}
            {isIta ? "Accoglienza Dedicata" : "Dedicated hospitality"}{" "}
            {isIta ? "per il soggiorno." : "throughout your stay."}
          </div>

          <div>
            <i className="bi bi-key-fill textBlue"></i>{" "}
            {isIta ? (
              <>Possibilità di Self Check-in</>
            ) : (
              <>Option for self check-in</>
            )}
          </div>

          <div>
            <i className="bi bi-tv-fill textTiffany"></i> Smart TV
          </div>

        </div>
      </div>


      <div className='py-5'>
        <h1 className='dancing-script-400 textDarkGray text-center'>Gallery</h1>
        <RoomGallery start={8} end={22} />
      </div>

    </div>
  )
}

export default Bluette