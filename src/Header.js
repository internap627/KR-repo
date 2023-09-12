import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col s10 m6 l3">
          <Link to="/leaders">
            <div className="card">
              <div className="card-image">
                <img src="leaders/ls01.jpeg" alt="Article 1" />
                <span className="card-title">Leaders In Service</span>
              </div>
              <div className="card-content">
                <p>View Images</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s10 m6 l3">
          <Link to="/motg">
            <div className="card">
              <div className="card-image">
                <img src="motg/motg01.jpeg" alt="Article 1" />
                <span className="card-title">Man On The Ground</span>
              </div>
              <div className="card-content">
                <p>View Images</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s10 m6 l3">
          <Link to="/market">
            <div className="card">
              <div className="card-image">
                <img src="market01.jpeg" alt="Article 1" />
                <span className="card-title">Tunapuna Market</span>
              </div>
              <div className="card-content">
                <p>View Images</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col s10 m6 l3">
          <Link to="/lge2023">
            <div className="card">
              <div className="card-image">
                <img src="lge2023/lge01.jpeg" alt="Article 1" />
                <span className="card-title">LGE 2023</span>
              </div>
              <div className="card-content">
                <p>View Images</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
