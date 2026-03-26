import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
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


const Yellow = () => {
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
        <img src={require(`../assets/pics_hero/web-6.jpg`)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
      </div>

      <div className='d-flex justify-content-center'>
        <div className='dancing-script-400 text-center py-5 px-3 myMaxW900'>
          <h1 className='textDarkGray'>{isIta ? "Camera Doppia Gialla" : "Yellow Double Room"}</h1>
          <h5 className='fw-light montserrat-400'>
            {
              isIta ?
                "La Camera Gialla è un’esplosione di luce ed energia: il giallo è il colore del sole, della vitalità e dell’allegria, una tonalità che regala buonumore fin dal primo risveglio e rende l’ambiente caldo e accogliente; dispone di un comodo letto matrimoniale, armadio spazioso, pratica scrivania, poggia valigia e Smart TV; il bagno privato in camera è completo di doccia, bidet, set di asciugamani, bagnodoccia e asciugacapelli; la stanza è dotata di aria condizionata e riscaldamento indipendenti, per garantirvi il massimo comfort in ogni stagione; una camera luminosa e positiva, perfetta per chi ama iniziare la giornata con il sorriso. 💛"
                : "The Yellow Room is an explosion of light and energy: yellow is the color of the sun, vitality, and joy, a shade that lifts your mood from the very first awakening and makes the space warm and welcoming; it features a comfortable double bed, spacious wardrobe, practical desk, luggage rack, and Smart TV; the private en-suite bathroom includes a shower, bidet, towels, body wash, and a hairdryer; the room is equipped with independent air conditioning and heating to ensure maximum comfort in every season; a bright and positive room, perfect for those who love to start the day with a smile. 💛"
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
        <RoomGallery start={57} end={74} />
      </div>

    </div>
  )
}

export default Yellow