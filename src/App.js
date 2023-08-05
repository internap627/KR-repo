import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Newsroom from "./Newsroom";
import Footer from "./Footer";
import Gallery from "./Gallery";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <Router>
      <div className="App">
        <Navbar setShowHeader={setShowHeader} />
        {/* {showHeader && <Header />} */}

        <Routes>
          <Route path="/" element={showHeader ? <Header /> : null} />
          <Route path="/about" element={<About />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
