import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import '../src/styles/home.css';
import '../src/styles/custom.css';
import '../src/styles/fonts.css';
import '../src/styles/rooms.css';
import '../src/styles/navbar.css';
import PhotoGalleryPage from "./pages/PhotoGalleryPage";
import RoomsPage from "./pages/RoomsPage";
import TiffanyPage from "./pages/TiffanyPage";
import LillaPage from "./pages/LillaPage";
import BluettePage from "./pages/BluettePage";
import YellowPage from "./pages/YellowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photogallery" element={<PhotoGalleryPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/tiffany" element={<TiffanyPage />} />
        <Route path="/lilla" element={<LillaPage />} />
        <Route path="/bluette" element={<BluettePage />} />
        <Route path="/yellow" element={<YellowPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
