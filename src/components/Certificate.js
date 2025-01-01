import React, { useState } from 'react';
import ciscoPython from '../assets/CiscoPython.png'
import hackerrankJs from '../assets/hackerrankJS.png'
import hackerrankReact from '../assets/hackerrankReact.png'
import openWeaver from '../assets/openWeaver.png'
import saylor from '../assets/saylor.png'
import './Certificate.css';

const certificates = [
  { name: 'Python By Cisco', image: ciscoPython },
  { name: 'Js By HackerRank', image: hackerrankJs },
  { name: 'HTML/CSS By OpenWeaver', image: openWeaver },
  { name: 'React By HackerRank', image: hackerrankReact },
  { name: 'C++ By Haylor', image: saylor }
];

function Certificate(props) {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const handleClosePopup = () => {
    props.setShowCertificate(false);
  };

  return (
    <div className="certificate-page">
      <div className="certificate-popup-container">
        <div className="certificate-popup-header">
          <button onClick={handleClosePopup} className="close-popup-button">
            Close
          </button>
        </div>
        <div className="certificate-content">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <img
                src={cert.image}
                alt={cert.name}
                className="certificate-image"
                onClick={() => handleImageClick(cert.image)}
              />
              <h3 className="certificate-name">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedImage}>
          <img
            src={enlargedImage}
            alt="Enlarged"
            className="enlarged-image"
          />
        </div>
      )}
    </div>
  );
}

export default Certificate;
