import React, { useState, useRef } from "react";
import "./App.css";
import audioFile from "./assets/self_worth-450.mp3";
import audioFile2 from "./assets/goliath-jessie_reyez.mp3";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isValentine, setIsValentine] = useState(false);
  const [isOpenLetter, setOpenLetter] = useState(false);
  const [audioTrack, setAudioTrack] = useState(audioFile);
  const audioRef = useRef(null);
  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleValentineYes = () => {
    setIsValentine(true);
    setAudioTrack(audioFile2);
  };

  // Handle play button click
  const handlePlayButton = () => {
    audioRef.current.play();
    setOpenLetter(true); // This will hide the white overlay
  };

  return (
    <div className="main-container-wrapper">
      {/* White overlay container - fades out when button is clicked */}
      <div className={`intro_container ${isOpenLetter ? "hidden" : ""}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1 style={{ color: "#333", marginBottom: "20px" }}>Welcome!</h1>
          <button
            onClick={handlePlayButton}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "#646cff",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#535bf2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#646cff")}
          >
            Click to Begin
          </button>
        </div>
      </div>

      {/* Main content - only visible after white overlay fades */}
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
          <audio ref={audioRef} controls src={audioTrack} autoPlay loop></audio>
        </figure>
      </div>
    </div>
  );
}

export default App;
