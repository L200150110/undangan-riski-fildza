import React from "react";
import { Button } from "reactstrap";

const Home = (props) => {
  return (
    <>
      <div>Undangan</div>
      <Button
        color="dark"
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
