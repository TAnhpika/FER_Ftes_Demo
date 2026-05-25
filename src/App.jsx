import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// CSS imported within component files
import { Link } from "react-router-dom";
import Header from "./styles/header";
import Footer from "./styles/footer";
import LandingPage from "./views/home/LandingPage";
import Content from "./styles/content";
import TopAnime from "./views/content/TopAnime";
import Product from "./views/product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/anime" element={<TopAnime />} />
        <Route path="/content" element={<Content />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
