import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const sidenav = document.querySelector(".sidenav");
    M.Sidenav.init(sidenav, {});

    const sidenavLinks = document.querySelectorAll(".sidenav li a");
    sidenavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const sidenavInstance = M.Sidenav.getInstance(sidenav);
        sidenavInstance.close();
      });
    });
  }, []);

  return (
    <nav>
      <div className="nav-wrapper white">
        <div className="container nav-container">
          <Link
            to="/"
            className="brand-logo"
          >
            <img
              src="/logo-kr1.jpeg" 
              alt="Kwasi Robinson" 
              className="candidate-avatar" 
            />
          </Link>
          <Link data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons grey-text">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down white">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <li>
              <Link to="/newsroom">
                Newsroom
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="logo-container">
            <img src="logo-kr1.jpeg" alt="Logo" className="logo" />
          </div>
        </li>
        <li className="divider"></li>
        <li>
          <Link to="/">
            <i className="material-icons">home</i> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="material-icons">person_pin</i> About
          </Link>
        </li>
        <li>
          <Link to="/newsroom">
            <i className="material-icons">description</i> Newsroom
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <i className="material-icons">photo_camera</i> Gallery
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
