import React, { useState } from "react";
import "./Intro.css";
import ReactPlayer from "react-player";
import { MuteIcon, UnMuteIcon } from "../Icons";

function Intro(props) {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <div className="intro-container">
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        muted={isMuted}
        loop={true}
        url="https://vimeo.com/330883178"
        className="video-intro"
      />
      <div className="info-intro">
        <h1 className="heading-intro">Netflix</h1>
        <p className="overview-intro">
          loremsum loremsum loremsum loremsum loremsum Transformers - Optimus
          Prime Tribute
        </p>
      </div>
      {isMuted ? (
        <button
          className="mute-btn"
          onClick={() => setIsMuted((prev) => !prev)}
        >
          <MuteIcon />
        </button>
      ) : (
        <button
          className="mute-btn"
          onClick={() => setIsMuted((prev) => !prev)}
        >
          <UnMuteIcon />
        </button>
      )}
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Intro;
