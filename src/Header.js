import React, { useState } from 'react';
import sampleVideo from './videos/kr-video.mp4';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="background-image"></div>
      <button
        className="header-button waves-effect waves-light white red-text btn"
        onClick={openModal}
      >
        <i className="material-icons left">airplay</i>Play Video
      </button>

      <div className="header-footer">
        <img src="logo-kr2.png" alt="page logo" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="custom-modal">
          <div className="modal-content">
            <video controls width="100%" height="auto" autoPlay>
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button className="modal-close" onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
