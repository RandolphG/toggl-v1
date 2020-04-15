import React from "react";
import "antd/dist/antd.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function InputBar({ handleSubmit, register, keyDown, onSubmit }) {
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
            inputRef={register({ required: true, minLength: 8 })}
            type={"info"}
            name={"title"}
            label="What are you doing?"
            onKeyDown={keyDown}
          />
        </div>
        <Button type={"submit"} className="button">
          Start
        </Button>
      </form>
    </div>
  );
}

export default InputBar;
