import React, { useEffect, useState } from 'react';
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

const _SharedArea = () => {

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
            <div className='d-flex justify-content-center'>
                <div className='dancing-script-400 text-center py-5 px-3 myMaxW900'>
                    <h1 className='textDarkGray'>{isIta ? "Area Comune" : "Shared Area"}</h1>
                    {
                        isIta ?
                            <div className='montserrat-400 text-start pt-3'>
                                <h5 className='fw-light'>All’interno della struttura troverete un’area comune pensata per una colazione rilassante e piacevole.</h5>
                                <div className='py-4'>
                                    <br /><h3 className='dancing-script-400'>Nell’area troverete:</h3>
                                    <ul>
                                        <li>un frigorifero condiviso</li>
                                        <li>una macchina del caffè Nespresso con capsule omaggio</li>
                                        <li>posate, bicchieri e utensili di base per una colazione semplice</li>
                                    </ul>
                                </div>

                                <h5 className='fw-light'>Per mantenere un ambiente piacevole per tutti, vi chiediamo gentilmente di evitare di cucinare nell’area comune, così da non creare odori che possano disturbare gli altri ospiti.

                                    Vi chiediamo inoltre di aiutarci a mantenere lo spazio sempre pulito e accogliente: piatti, posate, bicchieri e qualsiasi utensile utilizzato dovranno essere lavati poco dopo l’uso.

                                    Grazie per la collaborazione e per contribuire a mantenere un ambiente confortevole per tutti.</h5>
                            </div>
                            :
                            <div className='montserrat-400 text-start pt-3'>
                                <h5 className='fw-light'>You will find a shared common area inside the property, designed for a relaxed and enjoyable breakfast experience.</h5>
                                <div className='py-4'>
                                    <br /><h3 className='dancing-script-400'>In this area you will find:</h3>
                                    <ul>
                                        <li>a shared refrigerator</li>
                                        <li>a Nespresso coffee machine with complimentary capsules</li>
                                        <li>cutlery, glasses, and basic utensils for a simple breakfast</li>
                                    </ul>
                                </div>

                                <h5 className='fw-light'>To keep the space pleasant for everyone, we kindly ask guests to avoid cooking in the common area, as strong food smells may disturb others.

                                    Please help us keep the area clean and welcoming: dishes, cutlery, glasses, and any items used should be washed shortly after use.

                                    Thank you for your cooperation and for helping us maintain a comfortable environment for all guests.</h5>
                            </div>
                    }

                    <div className='d-flex gap-4 pt-5 justify-content-center montserrat-400'>
                        <div className='w-50'>
                            <h3 className='dancing-script-400 textDarkGray'>{isIta ? "Frigorifero" : "Refrigerator"}</h3>
                            <h5 className='fw-light'>{isIta ? "Condiviso" : "Shared"}</h5>
                        </div>
                        <div className='w-50' style={{ borderLeft: "2px solid #888" }}>
                            <h3 className='dancing-script-400 textDarkGray'>{isIta ? "Macchina del Caffè Nespresso" : "Nespresso Coffè Machine"}</h3>
                            <h5 className='fw-light'>{isIta ? "Cialde in omaggio" : "Free pods"}</h5>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='py-5'>
                    <h1 className='dancing-script-400 textDarkGray text-center'>Gallery</h1>
                    <RoomGallery start={1} end={6} />
                </div>
            </div>
        </div>
    )
}

export default _SharedArea