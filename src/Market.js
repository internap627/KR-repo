import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Carousel.css";

const Market = () => {
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
          <h4 className="carousel-title">Tunapuna Market</h4>
          <div id="carousel1" className="carousel">
            <a className="carousel-item" href="#one!">
              <img src="market01.jpeg" alt="Slide 1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="/market/market02.jpeg" alt="Slide 2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="/market/market03.jpeg" alt="Slide 3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="/market/market04.jpeg" alt="Slide 4" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="/market/market05.jpeg" alt="Slide 5" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="/market/market06.jpeg" alt="Slide 6" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="/market/market07.jpeg" alt="Slide 7" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;