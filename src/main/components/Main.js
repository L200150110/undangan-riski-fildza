import React, { useEffect, useState } from "react";
import bgMusic from "./../assets/bg-music.mp3";
import Home from "./Home";
import Name from "./Name";

import "./styles.scss";

const Main = () => {
  const [audio, setAudio] = useState(null);
  const [page, setPage] = useState("home");

  useEffect(() => {
    setAudio(new Audio(bgMusic));
  }, []);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
    }
  }, [audio]);

  const handlePlay = () => {
    audio.play().catch((err) => {
      console.log(err, "masuk err");
    });
  };

  return (
    <div className="container">
      {page === "home" ? (
        <Home handlePlay={handlePlay} setPage={setPage} />
      ) : (
        <></>
      )}
      {page === "name" ? <Name setPage={setPage} /> : <></>}
    </div>
  );
};

export default Main;
