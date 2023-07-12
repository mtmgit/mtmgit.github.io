import React, {useState} from "react";
import "./Item.css"

function Item({src, alt}) {

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
            <p style={{marginBottom: 0}}><b>Quantity:</b> 50x</p>
            <p><b>Price:</b> $100</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
              <button style={{backgroundColor: "#1890ff", color: "white", borderRadius: "0.5rem", border: "none"}} onClick={togglePopup}>Close</button>
            </div>

          </div>
        </div>
      )}
    </div>

  );
}

export default Item;