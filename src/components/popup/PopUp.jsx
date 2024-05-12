import { X } from "lucide-react";
import React, { useRef } from "react";
import "./Popup.css"; 
import { assets } from "../../assets/assets";

function PopUp({ onClose }) {
  
  const popupRef = useRef(null); // Correct usage of useRef

  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      onClose();
    }
  };
  

  return (
    <div ref={popupRef} onClick={closePopup} className="pop-up-container">
      <div className="pop-up-content">
        <button onClick={onClose} className="close-button">
          <X size={20} />
        </button>
        <div className="pop-up">
          <div className="cards-container">
            <div onClick={onClose}className="popup-card-1">
              <h3 >FREE</h3>
              <img src={assets.Free_icon}/>
            <h1 style={{fontFamily:'monospace'}}>&#x20B9;00</h1>
            <p>2 RPM (requests per minute)<br/>
          
          32,000 TPM (tokens per minute)<br/>
          
          50 RPD (requests per day)</p>
          </div>
          
          <div 
      className="popup-card-2" 
     
    >
      
          <h3>PAID</h3>
          <img src={assets.Premium_icon} />
          <h1 style={{fontFamily:'monospace'}}>&#x20B9;--</h1>
          <p>
            10 RPM (requests per minute)<br />
            10 million TPM (tokens per minute)<br />
            2,000 RPD (requests per day)
          </p>
        
    </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
