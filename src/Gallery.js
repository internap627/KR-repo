import React, { useEffect } from "react";
import M from "materialize-css"; 
import "./Carousel.css";

const Gallery = () => {
  useEffect(() => {
    const sixthCarouselElem = document.querySelector("#carousel6");
    M.Carousel.init(sixthCarouselElem, {
      indicators: true,
      padding: 200,
    });

    const fifthCarouselElem = document.querySelector("#carousel5");
    M.Carousel.init(fifthCarouselElem, {
      indicators: true,
      padding: 200,
    });

    const forthCarouselElem = document.querySelector("#carousel4");
    M.Carousel.init(forthCarouselElem, {
      indicators: true,
      padding: 200,
    });

    const thirdCarouselElem = document.querySelector("#carousel3");
    M.Carousel.init(thirdCarouselElem, {
      indicators: true,
      padding: 200,
    });

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
          <div className="carousel-container">
          <h4 className="carousel-title">Leaders In Service</h4>
          <div id="carousel1" className="carousel">
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
      </div>
      <div className="row">
        <div className="col s12">
          <div className="carousel-container">
          <h4 className="carousel-title">Man On The Ground</h4>
          <div id="carousel2" className="carousel">
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
      <div className="row">
        <div className="col s12">
          <div className="carousel-container">
          <h4 className="carousel-title">Tunapuna Market</h4>
          <div id="carousel3" className="carousel">
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
            <a className="carousel-item" href="#five!">
              <img src="/market/market05.jpeg" alt="Slide 5" />
            </a>
            <a className="carousel-item" href="#six!">
              <img src="/market/market06.jpeg" alt="Slide 6" />
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="carousel-container">
          <h4 className="carousel-title">Local Goverment Elections 2023</h4>
          <div id="carousel4" className="carousel">
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
      <div className="row">
        <div className="col s12">
          <div className="carousel-container">
          <h4 className="carousel-title">Team-up To Clean-up 2023</h4>
          <div id="carousel5" className="carousel">
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
      <div className="row">
        <div className="col s12">
          <div className="carousel-container">
          <h4 className="carousel-title">Youth Awards 2023</h4>
          <div id="carousel6" className="carousel">
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
            <a className="carousel-item" href="#four!">
              <img src="awards2023/awards05.jpg" alt="Slide 5" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
