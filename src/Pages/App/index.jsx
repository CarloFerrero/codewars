import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Home";
import RomanConverter from "../RomanConverter";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import RedirectBanner from "../RedirectBanner";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/roman-numerals-decoder" element={<RomanConverter />} />
        <Route path="/redirect-banner" element={<RedirectBanner />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
