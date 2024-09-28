import { useEffect, useState } from "react";
import NavBar from "./components/Boundary/NavBar";
import "./App.css";
import LandingPage from "./components/Landing/LandingPage";
import Footer from "./components/Boundary/Footer";

function App() {
  return (
    <div className="">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
