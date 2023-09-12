import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Newsroom from './Newsroom';
import Gallery from './Gallery';
import Footer from './Footer';
import Leaders from './Leaders';
import Motg from './MOTG';
import Market from './Market';
import Lge2023 from './Lge2023';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const showHeader = location.pathname === '/';

  return (
    <Routes>
      <Route path="/" element={showHeader ? <Header /> : null} />
      <Route path="/about" element={<About />} />
      <Route path="/newsroom" element={<Newsroom />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/leaders" element={<Leaders />} />
      <Route path="/motg" element={<Motg />} />
      <Route path="/market" element={<Market />} />
      <Route path="/lge2023" element={<Lge2023 />} />
    </Routes>
  );
}

export default App;
