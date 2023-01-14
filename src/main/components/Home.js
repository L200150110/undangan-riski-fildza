import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import moment from "moment";

const Home = (props) => {
  const countDown = useCountdown(new Date("2023-05-06 11:00:00"));

  useEffect(() => {
    console.log(countDown, "masuk count");
  }, [countDown]);

  return (
    <>
      {/* <div>Undangan</div> */}
      <div className="home_typografi">
        <div className="typografi_cpp">Riski</div>
        <div className="typografi_and">&</div>
        <div className="typografi_cpw">Fildza</div>
      </div>

      <div className="date_container">06 Mei 2023</div>

      <div className="countdown_container">
        <div className="countdown_header">Hari H</div>
        <div className="countdown_body">
          <div className="countdown_item">{countDown[0]}</div>
          <div className="countdown_item">{countDown[1]}</div>
          <div className="countdown_item">{countDown[2]}</div>
          <div className="countdown_item">{countDown[3]}</div>
        </div>
        <div className="countdown_footer">
          <div className="countdown_item">Hari</div>
          <div className="countdown_item">Jam</div>
          <div className="countdown_item">Menit</div>
          <div className="countdown_item">Detik</div>
        </div>
      </div>

      <Button
        color="dark"
        onClick={() => {
          props.handlePlay();
          props.setPage("main");
        }}
      >
        Buka Undangan
      </Button>
    </>
  );
};

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export default Home;
