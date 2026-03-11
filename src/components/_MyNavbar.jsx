import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo-xl.png";
import ita from "../assets/italy.png";
import eng from "../assets/united-kingdom.png";
import { useState } from "react";

const getInitialLanguage = () => {
  const savedLang = localStorage.getItem("isIta");

  if (savedLang !== null) {
    return savedLang === "true";
  }

  const browserIsItalian = navigator.language.split("-")[0] === "it";
  localStorage.setItem("isIta", String(browserIsItalian));
  return browserIsItalian;
};

const _MyNavbar = () => {
  const [isIta, setIsIta] = useState(getInitialLanguage);

  const handleChangeLanguage = () => {
    const newValue = !isIta;
    localStorage.setItem("isIta", String(newValue));
    setIsIta(newValue);
    window.dispatchEvent(new Event("languageChanged"));
  };

  return (
    <Navbar expand="lg" className="myGlassNav" collapseOnSelect fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="navLogo" />
        </Navbar.Brand>

        <div
          className="d-flex gap-1 align-items-center position-relative pe-4"
          onClick={handleChangeLanguage}
        >
          <p className="m-0 myTextLightgray">{isIta ? "it" : "en"}</p>

          <div
            className={`position-relative myCursor ${isIta ? "" : "bwFilter"}`}
            style={{ zIndex: isIta ? 1 : 0 }}
          >
            {!isIta && (
              <div className="h-100 w-100 myBgTransparent30 position-absolute rounded-5"></div>
            )}
            <img className="myWidth20" src={ita} alt="Italiano" />
          </div>

          <div className="position-absolute myCursor" style={{ right: "8px" }}>
            <div
              className={`position-relative myCursor ${isIta ? "bwFilter" : ""}`}
            >
              {isIta && (
                <div className="h-100 w-100 myBgTransparent30 position-absolute rounded-5"></div>
              )}
              <img className="myWidth20" src={eng} alt="English" />
            </div>
          </div>
        </div>

        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto navLinksWrap">
            <Nav.Link href="/rooms" className="myNavLink">
              {isIta ? "Camere" : "Rooms"}
            </Nav.Link>
            <Nav.Link href="/photogallery" className="myNavLink">
              {isIta ? "Galleria Foto" : "Photo Gallery"}
            </Nav.Link>
            <Nav.Link href="/contact" className="myNavLink">
              {isIta ? "Contatti" : "Contact"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default _MyNavbar;