import React, { useState, useRef } from "react";
import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import audioFile from "./assets/self_worth-450.mp3";
import audioFile2 from "./assets/goliath-jessie_reyez.mp3";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isValentine, setIsValentine] = useState(false);
  const [isOpenLetter, setOpenLetter] = useState(false);
  const [audioTrack, setAudioTrack] = useState(audioFile);
  const [isHovering, setIsHovering] = useState(false);
  const playerRef = useRef(null);
  const audioRef = useRef(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleValentineYes = () => {
    setIsValentine(true);
    setAudioTrack(audioFile2);
  };

  // Handle play button click
  const handleAnimationClick = () => {
    audioRef.current.play();
    setOpenLetter(true); // This will hide the white overlay

    // Play a quick animation when clicked (optional)
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  // Handle hover state for animation
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (playerRef.current) {
      playerRef.current.setPlayerSpeed(1.5); // Speed up on hover
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (playerRef.current) {
      playerRef.current.setPlayerSpeed(1); // Normal speed
    }
  };

  return (
    <div className="main-container-wrapper">
      {/* White overlay container - fades out when Lottie animation is clicked */}
      <div className={`intro_container ${isOpenLetter ? "hidden" : ""}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1
            style={{
              color: "#333",
              marginBottom: "20px",
              fontFamily: "cursive, sans-serif",
              fontSize: "2.5rem",
            }}
          >
            Hi Baby
          </h1>

          {/* Lottie Animation as Clickable Button using @lottiefiles/react-lottie-player */}
          <div
            onClick={handleAnimationClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: "200px",
              height: "200px",
              cursor: "pointer",
              borderRadius: "50%",
              boxShadow: isHovering
                ? "0 0 30px rgba(100, 108, 255, 0.6)"
                : "0 0 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              overflow: "hidden",
              backgroundColor: isHovering
                ? "rgba(100, 108, 255, 0.1)"
                : "transparent",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Click to begin"
          >
            {/* Using online Lottie animation */}
            <Player
              ref={playerRef}
              src="https://lottie.host/ea411ca2-62eb-42fd-b060-c7ada31b9b81/W8MuM6vfNh.json"
              loop
              autoplay
              style={{
                width: "100%",
                height: "100%",
                filter: isHovering ? "brightness(1.2)" : "brightness(1)",
                transition: "filter 0.3s ease",
              }}
              speed={1}
            />
          </div>
        </div>
      </div>

      {/* Main content - only visible after white overlay fades */}
      <div className={`main-container ${isValentine ? "valentines-bg" : ""}`}>
        <div
          className={`request-card ${isValentine ? "request-card-hidden" : ""}`}
        >
          <div>
            <Player
              ref={playerRef}
              src="https://lottie.host/2e98dff4-0b66-4a6c-96e6-a10608ac4103/MVOHupcZAV.json"
              loop
              autoplay
              style={{
                width: "30%",
                height: "30%",
                filter: isHovering ? "brightness(1.2)" : "brightness(1)",
                transition: "filter 0.3s ease",
              }}
              speed={1}
            />
            <h1
              style={{
                color: "#333",
                marginBottom: "20px",
                fontFamily: "cursive, sans-serif",
                fontSize: "2.5rem",
              }}
            >
              Would you be Mine this Valentines?
            </h1>
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
          <button id="closeButton" onClick={handleOpenPopup}>
            Your Finger Must've Slipped
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
