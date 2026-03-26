import React from 'react'

const SelfCheckin = ({isIta}) => {
    return (
        <div className='py-5 px-3 d-flex flex-wrap gap-4 align-items-center justify-content-center'>
            <img className="w-100" src={require(`../assets/pics_bassa/web-75.jpg`)} alt="" style={{ maxWidth: "530px" }} />
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
    )
}

export default SelfCheckin