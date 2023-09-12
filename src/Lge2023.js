import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Carousel.css";

const Lge2023 = () => {
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
          <h4 className="carousel-title">Local Goverment Elections</h4>
          <div id="carousel1" className="carousel">
            <a className="carousel-item" href="#one!">
              <img src="lge2023/lge01.jpeg" alt="Slide 1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="lge2023/lge02.jpeg" alt="Slide 2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="lge2023/lge03.jpeg" alt="Slide 3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="lge2023/lge04.jpeg" alt="Slide 4" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="lge2023/lge05.jpeg" alt="Slide 5" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="lge2023/lge06.jpeg" alt="Slide 6" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="lge2023/lge07.jpeg" alt="Slide 7" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lge2023;