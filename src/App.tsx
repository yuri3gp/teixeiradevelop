import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import NoPage from "./pages/NoPage";

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Header />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
