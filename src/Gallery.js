import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Gallery.css";

const Gallery = () => {
  useEffect(() => {
    const secondCarouselElem = document.querySelector("#carousel2");
    M.Carousel.init(secondCarouselElem, {
      indicators: true,
      padding: 200,
    });

    const firstCarouselElem = document.querySelector("#carousel1");
    M.Carousel.init(firstCarouselElem, {
      indicators: true,
      padding: 200,
    });
  }, []);

  return (
    <div className="gallery-container">
      <div className="row">
        <div className="col s12">
          <div id="carousel1" className="carousel">
            {/* <h4 className="carousel-title">Leaders in Service</h4> */}
            <a className="carousel-item" href="#one!">
              <img src="leaders/ls01.jpeg" alt="Slide 1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="leaders/ls02.jpeg" alt="Slide 2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="leaders/ls03.jpeg" alt="Slide 3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="leaders/ls04.jpeg" alt="Slide 4" />
            </a>
            <a className="carousel-item" href="#five!">
              <img src="leaders/ls05.jpeg" alt="Slide 5" />
            </a>
            <a className="carousel-item" href="#six!">
              <img src="leaders/ls06.jpeg" alt="Slide 6" />
            </a>
            <a className="carousel-item" href="#seven!">
              <img src="leaders/ls07.jpeg" alt="Slide 7" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div id="carousel2" className="carousel">
            {/* <h4 className="carousel-title">Man On The Ground</h4> */}
            <a className="carousel-item" href="#eight!">
              <img src="MOTG/motg01.jpeg" alt="Slide 8" />
            </a>
            <a className="carousel-item" href="#nine!">
              <img src="MOTG/motg02.jpeg" alt="Slide 9" />
            </a>
            <a className="carousel-item" href="#ten!">
              <img src="MOTG/motg03.jpeg" alt="Slide 10" />
            </a>
            <a className="carousel-item" href="#eleven!">
              <img src="MOTG/motg04.jpeg" alt="Slide 11" />
            </a>
            <a className="carousel-item" href="#twelve!">
              <img src="MOTG/motg05.jpeg" alt="Slide 12" />
            </a>
            <a className="carousel-item" href="#thirteen!">
              <img src="MOTG/motg06.jpeg" alt="Slide 13" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
