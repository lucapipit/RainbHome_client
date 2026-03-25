import React, {useState, useEffect} from "react";

const getInitialLanguage = () => {
    const savedLang = localStorage.getItem("isIta");

    if (savedLang !== null) {
        return savedLang === "true";
    }

    const browserIsItalian = navigator.language.split("-")[0] === "it";
    localStorage.setItem("isIta", String(browserIsItalian));
    return browserIsItalian;
};

const PrivacyPolicy = () => {
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

    const fullName = "Giulia De Sanctis";
    const email = "info@rainbHome.com";
    const address = "Via Alfonso Borelli, 7, 00161 Roma RM";
    const siteName = "RainbHome Roman Suites";
    const lastUpdated = "25/03/2026";

    const text = {
        it: {
            title: "Privacy Policy",
            intro:
                "La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che visitano questo sito web.",
            ownerTitle: "Titolare del trattamento",
            ownerText: "Il titolare del trattamento dei dati personali è:",
            dataCollectedTitle: "Tipologia di dati trattati",
            dataCollectedText1:
                "Questo sito è un sito vetrina statico con finalità esclusivamente informative.",
            dataCollectedText2:
                "Non sono presenti aree riservate, sistemi di registrazione, moduli di login o strumenti di profilazione dell’utente.",
            navDataTitle: "Dati di navigazione",
            navDataText1:
                "Durante la normale navigazione, alcuni dati tecnici possono essere trattati automaticamente dai sistemi informatici e dai protocolli di comunicazione Internet.",
            navDataList: [
                "indirizzo IP",
                "tipo di browser",
                "sistema operativo",
                "data e ora della richiesta",
                "informazioni tecniche necessarie alla corretta visualizzazione del sito"
            ],
            navDataText2:
                "Tali dati sono trattati esclusivamente per finalità tecniche, di sicurezza e di corretto funzionamento del sito.",
            cookiesTitle: "Cookie",
            cookiesText1:
                "Questo sito utilizza esclusivamente cookie tecnici, ove presenti, strettamente necessari al funzionamento del sito e alla corretta erogazione dei contenuti.",
            cookiesText2:
                "Non vengono utilizzati cookie di profilazione, cookie pubblicitari né strumenti di tracciamento per finalità di marketing.",
            cookiesText3:
                "Per l’utilizzo dei soli cookie tecnici non è richiesto il consenso preventivo dell’utente, fermo restando l’obbligo di fornire un’idonea informativa.",
            thirdPartyTitle: "Servizi di terze parti",
            thirdPartyText1:
                "Il sito può caricare font web forniti da Google Fonts tramite i domini fonts.googleapis.com e/o fonts.gstatic.com, al fine di migliorare la resa grafica e tipografica delle pagine.",
            thirdPartyText2:
                "Quando il browser dell’utente richiede tali risorse, alcuni dati tecnici, come l’indirizzo IP e le informazioni necessarie alla richiesta HTTP, possono essere comunicati ai server del fornitore terzo.",
            thirdPartyText3:
                "Il sito non utilizza tali risorse per finalità di profilazione o marketing.",
            purposesTitle: "Finalità del trattamento",
            purposesList: [
                "consentire la navigazione e la fruizione del sito",
                "garantire la sicurezza e la stabilità tecnica della piattaforma",
                "migliorare la corretta visualizzazione dei contenuti e dei caratteri tipografici",
                "prevenire malfunzionamenti o abusi"
            ],
            legalBasisTitle: "Base giuridica del trattamento",
            legalBasisText:
                "La base giuridica del trattamento è il legittimo interesse del titolare a garantire il funzionamento tecnico, la sicurezza, l’accessibilità e la corretta presentazione del sito web, nonché l’adempimento di eventuali obblighi di legge applicabili.",
            processingTitle: "Modalità di trattamento",
            processingText:
                "Il trattamento dei dati avviene con strumenti informatici e telematici, con misure tecniche e organizzative adeguate a garantire sicurezza, riservatezza e disponibilità dei dati.",
            retentionTitle: "Conservazione dei dati",
            retentionText:
                "I dati tecnici eventualmente raccolti sono conservati per il tempo strettamente necessario al perseguimento delle finalità sopra indicate, salvo eventuali obblighi di legge o necessità di accertamento di illeciti.",
            recipientsTitle: "Comunicazione dei dati",
            recipientsText:
                "I dati non sono diffusi. Potranno essere trattati da fornitori tecnici strettamente necessari all’hosting, alla manutenzione, alla sicurezza del sito o alla fornitura di risorse tecniche esterne, nei limiti strettamente pertinenti al funzionamento del sito.",
            rightsTitle: "Diritti dell’interessato",
            rightsText:
                "L’utente può esercitare i diritti previsti dalla normativa applicabile in materia di protezione dei dati personali, inclusi il diritto di accesso, rettifica, cancellazione, limitazione del trattamento, opposizione e reclamo all’autorità di controllo competente.",
            rightsText2:
                "Per esercitare i propri diritti, l’utente può contattare il titolare ai recapiti indicati sopra.",
            changesTitle: "Modifiche alla presente informativa",
            changesText:
                "La presente privacy policy può essere aggiornata in qualsiasi momento. Eventuali modifiche saranno pubblicate su questa pagina.",
            updated: "Ultimo aggiornamento"
        },
        en: {
            title: "Privacy Policy",
            intro:
                "This notice explains how personal data of users visiting this website may be processed.",
            ownerTitle: "Data Controller",
            ownerText: "The data controller is:",
            dataCollectedTitle: "Types of data processed",
            dataCollectedText1:
                "This website is a static showcase website for informational purposes only.",
            dataCollectedText2:
                "There are no restricted areas, registration systems, login forms, or user profiling tools.",
            navDataTitle: "Browsing data",
            navDataText1:
                "During normal browsing, certain technical data may be processed automatically by computer systems and Internet communication protocols.",
            navDataList: [
                "IP address",
                "browser type",
                "operating system",
                "date and time of the request",
                "technical information necessary for the correct display of the website"
            ],
            navDataText2:
                "Such data is processed exclusively for technical, security, and website operation purposes.",
            cookiesTitle: "Cookies",
            cookiesText1:
                "This website uses only technical cookies, where applicable, strictly necessary for the operation of the website and for the proper delivery of its content.",
            cookiesText2:
                "No profiling cookies, advertising cookies, or marketing tracking tools are used.",
            cookiesText3:
                "Where only technical cookies are used, prior user consent is not required, provided that adequate information is supplied.",
            thirdPartyTitle: "Third-party services",
            thirdPartyText1:
                "The website may load web fonts provided by Google Fonts through the domains fonts.googleapis.com and/or fonts.gstatic.com in order to improve the visual and typographic rendering of the pages.",
            thirdPartyText2:
                "When the user’s browser requests such resources, certain technical data, such as the IP address and information necessary for the HTTP request, may be transmitted to the third-party provider’s servers.",
            thirdPartyText3:
                "The website does not use these resources for profiling or marketing purposes.",
            purposesTitle: "Purposes of processing",
            purposesList: [
                "allowing users to browse and use the website",
                "ensuring the technical security and stability of the platform",
                "improving the correct display of content and web fonts",
                "preventing malfunctions or misuse"
            ],
            legalBasisTitle: "Legal basis for processing",
            legalBasisText:
                "The legal basis for processing is the controller’s legitimate interest in ensuring the technical operation, security, accessibility, and proper presentation of the website, as well as compliance with any applicable legal obligations.",
            processingTitle: "Methods of processing",
            processingText:
                "Data is processed by electronic and telematic means, with appropriate technical and organisational measures to ensure data security, confidentiality, and availability.",
            retentionTitle: "Data retention",
            retentionText:
                "Any technical data collected is retained only for the time strictly necessary to achieve the purposes described above, unless longer retention is required by law or for the establishment, exercise, or defence of legal claims.",
            recipientsTitle: "Disclosure of data",
            recipientsText:
                "Data is not disclosed to the public. It may be processed by technical service providers strictly necessary for hosting, maintenance, website security, or the provision of external technical resources, only insofar as relevant to the operation of the website.",
            rightsTitle: "Data subject rights",
            rightsText:
                "Users may exercise the rights granted by applicable data protection laws, including the right of access, rectification, erasure, restriction of processing, objection, and the right to lodge a complaint with the competent supervisory authority.",
            rightsText2:
                "To exercise these rights, users may contact the data controller using the contact details above.",
            changesTitle: "Changes to this notice",
            changesText:
                "This privacy policy may be updated at any time. Any changes will be published on this page.",
            updated: "Last updated"
        }
    };

    const t = isIta ? text.it : text.en;

    return (
        <div className="container py-5" style={{ maxWidth: "900px" }}>
            <h1 className="mb-4">{t.title}</h1>

            <p>{t.intro}</p>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.ownerTitle}</h2>
                <p className="mb-1">{t.ownerText}</p>
                <p className="mb-1"><strong>{fullName}</strong></p>
                <p className="mb-1">{address}</p>
                <p className="mb-0">
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.dataCollectedTitle}</h2>
                <p>{t.dataCollectedText1}</p>
                <p>{t.dataCollectedText2}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.navDataTitle}</h2>
                <p>{t.navDataText1}</p>
                <ul>
                    {t.navDataList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>{t.navDataText2}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.cookiesTitle}</h2>
                <p>{t.cookiesText1}</p>
                <p>{t.cookiesText2}</p>
                <p>{t.cookiesText3}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.thirdPartyTitle}</h2>
                <p>{t.thirdPartyText1}</p>
                <p>{t.thirdPartyText2}</p>
                <p>{t.thirdPartyText3}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.purposesTitle}</h2>
                <ul>
                    {t.purposesList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.legalBasisTitle}</h2>
                <p>{t.legalBasisText}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.processingTitle}</h2>
                <p>{t.processingText}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.retentionTitle}</h2>
                <p>{t.retentionText}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.recipientsTitle}</h2>
                <p>{t.recipientsText}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.rightsTitle}</h2>
                <p>{t.rightsText}</p>
                <p>{t.rightsText2}</p>
            </section>

            <section className="mt-4">
                <h2 className="h4 mb-3">{t.changesTitle}</h2>
                <p>{t.changesText}</p>
            </section>

            <div className="mt-5 pt-3 border-top">
                <small>
                    {t.updated}: {lastUpdated} · {siteName}
                </small>
            </div>
        </div>
    );
};

export default PrivacyPolicy;