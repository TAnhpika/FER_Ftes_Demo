import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// CSS imported within component files
import { Link } from "react-router-dom";
import Header from "./styles/header";
import Footer from "./styles/footer";
import LandingPage from "./views/home/LandingPage";
import TopAnime from "./views/content/TopAnime";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/anime" element={<TopAnime />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
