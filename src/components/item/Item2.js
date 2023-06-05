import React, {useState} from "react";
import "./Item.css"

function Item2({src, alt}) {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="grid-item"><img src={src} alt={alt} onClick={togglePopup}/></div>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{alt}</h2>
            <p style={{marginBottom: 0}}><b>Years of Experience:</b> 5 years</p>
            <p><b>Description:</b> Happy to be here! Contact me for a free quote. </p>
            <div className="bottom-btns">
              <button className="contact-btn">Contact Me</button>
              <button onClick={togglePopup}>Close</button>
            </div>

          </div>
        </div>
      )}
    </div>

  );
}

export default Item2;