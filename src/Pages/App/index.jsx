import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Home";
import RomanConverter from "../RomanConverter";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import RedirectBanner from "../RedirectBanner";
import Flea from "../Flea";
import DecodeMorse from "../DecodeMorse";

const App = () => {
  return (
    <div style={{ backgroundColor: "#fafafa " }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/roman-numerals-decoder" element={<RomanConverter />} />
        <Route path="/decode-morse" element={<DecodeMorse />} />
        <Route path="/redirect-banner" element={<RedirectBanner />} />
        <Route path="/flea" element={<Flea />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
