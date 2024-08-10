import { useState } from "react";
import viteLogo from "/vite.svg";
import "../css/App.css";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "@/components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
