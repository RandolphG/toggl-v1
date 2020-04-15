import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseIcon from "@material-ui/icons/Pause";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import IconButton from "@material-ui/core/IconButton";
const Timer = ({ remove }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row">
        <IconButton
          size="small"
          component="span"
          variant="contained"
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? <PauseIcon /> : <PlayCircleOutlineIcon />}
        </IconButton>
        <IconButton
          onClick={reset}
          size="medium"
          color="primary"
          component="span"
        >
          <AutorenewIcon />
        </IconButton>
        <IconButton onClick={remove} color="secondary" component="span">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Timer;
