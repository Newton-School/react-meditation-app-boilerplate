import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/App.css";
const rainAudioSrc = "./src/rain.mp3";
const beachAudioSrc = "./src/beach.mp3";

const AudioSelector = () => {
  return (
    <div className="col">
      <div id="durationSelector" className="container">
        
      </div>

      <div id="sourceSelector" className="container">
        
      </div>
    </div>
  );
};

const AudioHandler = () => {

    return (
      <div className="timer-container">
        <h1>Meditation App</h1>
        
      </div>
    );
};

const App = () => {
  const [audioSrc, setAudioSrc] = useState("");
  const [audioDuration, setAudioDuration] = useState(0);

  return (
    <div id="main">
      <div className="row">
        <AudioSelector
          setAudioSrc={setAudioSrc}
          setAudioDuration={setAudioDuration}
        />
        <AudioHandler audioSrc={audioSrc} audioDuration={audioDuration} />
      </div>
    </div>
  );
};

export default App;
