import React from "react";
import { Button } from "reactstrap";

const Home = (props) => {
  return (
    <>
      {/* <div>Undangan</div> */}
      <div className="home_typografi">
        <div className="typografi_cpp">Riski</div>
        <div className="typografi_and">&</div>
        <div className="typografi_cpw">Fildza</div>
      </div>
      <Button
        color="light"
        onClick={() => {
          props.handlePlay();
          props.setPage("name");
        }}
      >
        Buka Undangan
      </Button>
    </>
  );
};

export default Home;
