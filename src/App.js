import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Newsroom from './Newsroom';
import Gallery from './Gallery';
import Footer from './Footer';

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
    </Routes>
  );
}

export default App;
