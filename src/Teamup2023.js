import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Carousel.css";

const Teamup2023 = () => {
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
          <h4 className="carousel-title">Team-up To Clean-up 2023</h4>
          <div id="carousel1" className="carousel">
            <a className="carousel-item" href="#one!">
              <img src="teamup2023/teamup01.jpeg" alt="Slide 1" />
            </a>
            <a className="carousel-item" href="#two!">
              <img src="teamup2023/teamup02.jpeg" alt="Slide 2" />
            </a>
            <a className="carousel-item" href="#three!">
              <img src="teamup2023/teamup03.jpeg" alt="Slide 3" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="teamup2023/teamup04.jpeg" alt="Slide 4" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="teamup2023/teamup05.jpeg" alt="Slide 5" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="teamup2023/teamup06.jpeg" alt="Slide 6" />
            </a>
            <a className="carousel-item" href="#four!">
              <img src="teamup2023/teamup07.jpeg" alt="Slide 7" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamup2023;