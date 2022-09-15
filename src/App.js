import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
