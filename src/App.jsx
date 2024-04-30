import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Properties from "./pages/Properties";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
