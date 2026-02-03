import React, { useState } from "react";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="request-card">
        <div>
          <h1>Would you be my Valentine?</h1>
        </div>
        <div className="card">
          <button id="onlyChoiceButton">Yes</button>
          <button type="submit" onClick={handleOpenPopup}>
            No
          </button>
        </div>
      </div>

      <div className={`container popup ${isPopupOpen ? "open-popup" : ""}`}>
        <button type="button" onClick={handleOpenPopup}>
          Go Again
        </button>
      </div>
    </>
  );
}

export default App;
