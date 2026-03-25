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
            <div className='d-flex justify-content-center textDarkGray'>
                <div className='dancing-script-400 text-center py-5 px-3 myMaxW900'>
                    <h1 className=''>{isIta ? "Area Comune" : "Common Area"}</h1>
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
                            </div>
                    }

                    <div className='d-flex gap-4 pt-5 justify-content-center montserrat-400'>
                        <div className='w-50'>
                            <h3 className='dancing-script-400 '>{isIta ? "Frigorifero" : "Refrigerator"}</h3>
                        </div>
                        <div className='w-50' style={{ borderLeft: "2px solid #888" }}>
                            <h3 className='dancing-script-400 '>{isIta ? "Macchina del Caffè Nespresso" : "Nespresso Coffè Machine"}</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div className='py-5 textDarkGray'>
                    <h1 className='dancing-script-400  text-center'>Gallery</h1>
                    <RoomGallery start={1} end={6} />
                </div>
            </div>
        </div>
    )
}

export default _SharedArea