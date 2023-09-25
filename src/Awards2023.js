import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Carousel.css";

const Awards2023 = () => {
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
          <h4 className="carousel-title">Youth Awards 2023</h4>
          <div id="carousel1" className="carousel">
            <a className="carousel-item" href="#one!">
              <img src="awards2023/awards01.jpg" alt="Slide 1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="awards2023/awards02.jpg" alt="Slide 2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="awards2023/awards03.jpg" alt="Slide 3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="awards2023/awards04.jpg" alt="Slide 4" />
            </a>
            <a className="carousel-item" href="#five!">
              <img src="awards2023/awards05.jpg" alt="Slide 5" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards2023;