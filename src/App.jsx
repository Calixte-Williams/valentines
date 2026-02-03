import React, { useState } from "react";
import "./App.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isValentine, setIsValentine] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [audioTrack, setAudioTrack] = useState(
    "assets/audio/self_worth-450.mp3",
  );

  const handleValentineYes = () => {
    setIsValentine(true);
    setAudioTrack("assets/audio/goliath-jessie_reyez.mp3");
  };

  return (
    <div className={`main-container ${isValentine ? "valentines-bg" : ""}`}>
      <div
        className={`request-card ${isValentine ? "request-card-hidden" : ""}`}
      >
        <div>
          <h1>Would you be my Valentine?</h1>
        </div>
        <div className="card">
          <button id="onlyChoiceButton" onClick={handleValentineYes}>
            Yes
          </button>
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
      <figure className="player">
        <audio controls src={audioTrack} autoPlay loop></audio>
      </figure>
    </div>
  );
}

export default App;
