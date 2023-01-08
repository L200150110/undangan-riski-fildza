import React, { useEffect, useState } from "react";
import bgMusic from "./../assets/bg-music.mp3";
import { Play, Pause } from "react-feather";
import Firebase from "./Firebase";
import { ref, set, onValue } from "firebase/database";
import Home from "./Home";
import Name from "./Name";
import moment from "moment";
import uuid from "react-uuid";
import "./styles.scss";
import Swal from "sweetalert2";
import _ from "lodash";

const Main = () => {
  const [audio, setAudio] = useState(null);
  const [page, setPage] = useState("home");
  const [play, setPlay] = useState(false);
  const db = Firebase();
  const [allMessage, setAllMessage] = useState([]);

  const [state, setState] = useState({
    message: {
      name: "",
      message: "",
    },
  });

  useEffect(() => {
    setAudio(new Audio(bgMusic));

    const dbRef = ref(db, "pesan");
    onValue(dbRef, (snapshot) => {
      const record = [];
      snapshot.forEach((item) => {
        record.push(item.val());
      });
      setAllMessage(_.orderBy(record, ["time"], ["desc"]));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
    }
  }, [audio]);

  const handlePlay = () => {
    setPlay(!play);
  };

  const addMessage = (payload) => {
    Swal.fire({
      title: "Kirim Pesan ini?",
      text: "Pesan ini tidak akan bisa dihapus!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#212529",
      cancelButtonColor: "##e9ecef",
      confirmButtonText: "Kirim",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        set(ref(db, "pesan/" + uuid()), {
          ...payload,
          time: moment().format("YYYY-MM-DD HH:mm:ss"),
        })
          .then(() => {
            Swal.fire({
              title: "Yeay!",
              text: "Pesanmu Telah Terkirim",
              icon: "success",
              confirmButtonColor: "#212529",
              confirmButtonText: "Okay",
            });
            setState({ ...state, message: { name: "", message: "" } });
          })
          .catch((err) => console.log(err, "masuk err"));
      }
    });
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
        {play ? <Pause stroke="#212529" /> : <Play stroke="#212529" />}
      </div>
      {page === "home" ? (
        <Home handlePlay={() => setPlay(true)} setPage={setPage} />
      ) : (
        <></>
      )}
      {page === "name" ? (
        <Name
          setPage={setPage}
          addMessage={addMessage}
          allMessage={allMessage}
          state={state}
          setState={setState}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
