import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Carousel.css";

const Motg = () => {
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
    <div className="main-container">
      <div className="row">
        <div className="col s12">
          <div className="carousel-container">
          <h4 className="carousel-title">Man On The Ground</h4>
          <div id="carousel1" className="carousel">
            <a className="carousel-item" href="#one!">
              <img src="motg/motg02.jpeg" alt="Slide 1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="motg/motg03.jpeg" alt="Slide 2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="motg/motg04.jpeg" alt="Slide 3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="motg/motg05.jpeg" alt="Slide 4" />
            </a>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motg;