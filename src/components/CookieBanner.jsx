import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LANGUAGE_KEY = "isIta";
const COOKIE_KEY = "rainbow_cookie_banner_accepted";

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem(LANGUAGE_KEY);

  if (savedLang !== null) {
    return savedLang === "true";
  }

  const browserIsItalian = navigator.language?.split("-")[0] === "it";
  localStorage.setItem(LANGUAGE_KEY, String(browserIsItalian));
  return browserIsItalian;
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [isIta, setIsIta] = useState(getInitialLanguage);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const syncLanguage = () => {
      const savedLang = localStorage.getItem(LANGUAGE_KEY);
      setIsIta(savedLang === "true");
    };

    const handleStorageChange = (event) => {
      if (event.key === LANGUAGE_KEY) {
        setIsIta(event.newValue === "true");
      }
    };

    window.addEventListener("languageChanged", syncLanguage);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("languageChanged", syncLanguage);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  const text = {
    it: {
      title: "Informativa cookie",
      description:
        "Questo sito utilizza solo cookie tecnici e risorse esterne strettamente funzionali, come i Google Fonts, per garantire il corretto funzionamento e una migliore visualizzazione dei contenuti.",
      accept: "Accetta",
      more: "Leggi la privacy policy",
      close: "Chiudi"
    },
    en: {
      title: "Cookie notice",
      description:
        "This website only uses technical cookies and strictly functional external resources, such as Google Fonts, to ensure proper operation and better content display.",
      accept: "Accept",
      more: "Read the privacy policy",
      close: "Close"
    }
  };

  const t = isIta ? text.it : text.en;

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none"
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          width: "100%",
          background: "rgba(250, 250, 250, 0.5)",
          color: "#666",
          borderRadius: "16px",
          padding: "18px 20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
          backdropFilter: "blur(8px)",
          pointerEvents: "auto"
        }}
      >
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
          <div className="pe-lg-4">
            <h6 className="mb-2 fw-semibold">{t.title}</h6>
            <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
              {t.description}{" "}
              <Link
                to="/privacypolicy"
                style={{
                  color: "#666",
                  textDecoration: "underline",
                  fontWeight: 600
                }}
              >
                {t.more}
              </Link>
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2 justify-content-start justify-content-lg-end">
            <button
              type="button"
              onClick={handleAccept}
              className="btn btn-secondary"
              style={{ minWidth: "120px" }}
            >
              {t.accept}
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="btn btn-outline-secondary"
              style={{ minWidth: "120px" }}
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;