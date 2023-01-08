import React, { useEffect, useState } from "react";
import bgMusic from "./../assets/bg-music.mp3";
import { Play, Pause } from "react-feather";
import Home from "./Home";
import Name from "./Name";

import "./styles.scss";

const Main = () => {
  const [audio, setAudio] = useState(null);
  const [page, setPage] = useState("home");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setAudio(new Audio(bgMusic));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
    }
  }, [audio]);

  const handlePlay = () => {
    setPlay(!play);
  };

  useEffect(() => {
    if (audio) {
      if (play) {
        audio.play().catch((err) => {
          console.log(err, "masuk err");
        });
      } else {
        audio.pause();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  return (
    <div className="container">
      <div className="audio_play_pause" onClick={() => handlePlay()}>
        {play ? <Pause stroke="white" /> : <Play stroke="white" />}
      </div>
      {page === "home" ? (
        <Home handlePlay={() => setPlay(true)} setPage={setPage} />
      ) : (
        <></>
      )}
      {page === "name" ? <Name setPage={setPage} /> : <></>}
    </div>
  );
};

export default Main;
