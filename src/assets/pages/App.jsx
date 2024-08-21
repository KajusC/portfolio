import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import viteLogo from "/vite.svg";
import "../css/App.css";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "../pages/About";
import NotFound from "./NotFound";
import Contacts from "./Contacts";
import Projects from "./Projects";
import EpamReview from "./EpamReview";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/portfolio"
          element={
            <>
              <Hero />
              <About />
            </>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/epam" element={<EpamReview /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
