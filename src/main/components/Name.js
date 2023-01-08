import React from "react";
import { Button, Input } from "reactstrap";
import moment from "moment";

const Name = (props) => {
  const { state, setState } = props;

  return (
    <div>
      <div className="db_message_container mb-4">
        {props.allMessage.map((item, i) => {
          return (
            <div className="db_message_item_container" key={i}>
              <div className="db_message_item_header">
                <div>{item.name}</div>
                <div>{moment(item.time).format("mm:ss DD-MM-YYYY")}</div>
              </div>
              <div className="db_message_item_body">{item.message}</div>
            </div>
          );
        })}
      </div>
      <div className="message_container">
        <Input
          placeholder="Nama"
          value={state.message.name}
          onChange={(e) =>
            setState({
              ...state,
              message: { ...state.message, name: e.target.value },
            })
          }
        />
        <textarea
          className="form-control"
          placeholder="Pesan"
          value={state.message.message}
          onChange={(e) =>
            setState({
              ...state,
              message: { ...state.message, message: e.target.value },
            })
          }
        />
        <Button
          color="dark"
          onClick={() => props.addMessage(state.message)}
          className="message_button"
        >
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default Name;
