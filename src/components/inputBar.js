import React from "react";
import "antd/dist/antd.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function InputBar({
  handleSubmit,
  register,
  keyDown,
  onSubmit,
  totalMinutes,
  totalSeconds,
  active,
}) {
  /**
   * format number to time format
   * @param number
   */
  const format = (number) => {
    return (number + "").length === 1 ? "0" + number : number + "";
  };

  return (
    <div className="main-header">
      <form
        className="main-form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="info">
          <TextField
            inputRef={register({ required: true, minLength: 5 })}
            type={"info"}
            name={"title"}
            size={"small"}
            label="What are you doing?"
            onKeyDown={keyDown}
          />
        </div>
        <Button type={"submit"} className="button">
          Start
        </Button>
      </form>
      <div className="details">
        <div className={"active"}>
          <span className={active ? "active-txt" : "active-txt-zero"}>
            ACTIVE
          </span>
          <span className="number">{!active ? "" : active}</span>
        </div>
        <div className="total-time">
          <span className="total-txt">TIME</span>
          <span className="total-number">
            {format(totalMinutes)}:{format(totalSeconds)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default InputBar;
