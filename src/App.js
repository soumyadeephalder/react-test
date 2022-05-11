import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./screen/About";
import Contact from "./screen/Contact";
import Home from "./screen/Home";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
