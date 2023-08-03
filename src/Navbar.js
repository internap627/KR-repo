import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'; // Import Materialize CSS styles

const Navbar = ({setShowHeader}) => {
  useEffect(() => {
    // Initialize the sidenav
    const sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {});

    // Optionally, you can also close the sidenav on item click
    const sidenavLinks = document.querySelectorAll('.sidenav li a');
    sidenavLinks.forEach(link => {
      link.addEventListener('click', () => {
        const sidenavInstance = M.Sidenav.getInstance(sidenav);
        sidenavInstance.close();
      });
    });
  }, []);


  return (
    <nav>
      <div className="nav-wrapper white">
        <div className="container nav-container">
          {/* Replace "Politician's Name" with the actual name */}
          <a href="#" className="brand-logo">
            <img
              src="/logo-kr1.jpeg" // Relative path to the image from the public folder
              alt="Kwasi Robinson" // Add appropriate alt text for accessibility
              className="candidate-avatar" // Add any additional class or styling if required
            />
          </a>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons grey-text">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down white">
            {/* Add your navigation links here */}
            <li>
              <Link onClick={() => setShowHeader(true)} to="/">Home</Link>
            </li>
            <li>
              {/* <a href="#about">About</a> */}
              <Link onClick={() => setShowHeader(false)} to="/about">About</Link>
            </li>
            <li>
              <a href="#press">Press</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <ul id="slide-out" className="sidenav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#press">Press</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
