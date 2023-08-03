import React from "react";
import "./Newsroom.css";

const Newsroom = () => {
  return (
    <div className="newsroom-container">
      <h3 className="newsroom-title">Press Coverage</h3>
      <div className="row">
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image">
              <img src="heliconia-news-kr.jpeg" alt="Article 1" />
              <span className="card-title">
                New Head of Heliconia Foundation
              </span>
            </div>
            <div className="card-content">
              <p>
                KWASI ROBINSON, the chairman of the Tunapuna/Piarco Regional
                Corporation, took office as new president of the Heliconia
                Foundation for Young Professionals at an inauguration function
                for the new executive committee on Friday at the Bungalow
                Restaurant in St Clair.
              </p>
            </div>
            <div className="card-action">
              <a
                href="https://newsday.co.tt/2023/05/20/kwasi-robinson-new-head-of-heliconia-foundation/"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image">
              <img src="tprc-news-kr.png" alt="Article 1" />
              <span className="card-title">
                We are excited to have Faris at the helm
              </span>
            </div>
            <div className="card-content">
              <p>
                Chairman of the Tunapuna/Piarco Regional Corporation, Kwasi
                Robinson said his team is more than happy to have former
                Attorney General, Faris Al Rawi serve as their new line
                minister.
              </p>
            </div>
            <div className="card-action">
              <a
                href="http://tt.loopnews.com/content/tprc-chairman-were-excited-have-faris-helm-598297"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* Add more cards */}
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image">
              <img src="chow-news-kr.jpg" alt="Article 1" />
              <span className="card-title">
              Doors open for chow man Joshua
              </span>
            </div>
            <div className="card-content">
              <p>
                Joshua Faltine is expected to operate a stall from tomorrow at
                the Eddie Hart Savannah, Tacarigua. This has been made possible
                through the intervention of several good Samaritans, including
                Kwasi Robinson, chairman of the Tunapuna/Piarco Regional
                Corporation.
              </p>
            </div>
            <div className="card-action">
              <a
                href="https://trinidadexpress.com/news/local/doors-open-for-chow-man-joshua/article_ab5ac74e-dc91-11ec-b4d3-df95d4c053af.html"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
