import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseIcon from "@material-ui/icons/Pause";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import IconButton from "@material-ui/core/IconButton";
const Timer = ({
  remove,
  totalMilliSeconds,
  setTotalMilliSeconds,
  totalSeconds,
  setTotalSeconds,
  totalMinutes,
  setTotalMinutes,
}) => {
  const [ms, setMS] = useState(0);
  const [ss, setSS] = useState(0);
  const [mm, setMM] = useState(0);
  const [isActive, setIsActive] = useState(true);

  /**
   * toggle pause and play
   */
  function toggle() {
    setIsActive(!isActive);
  }

  /**
   * reset count to zero
   */
  function reset() {
    setMS(0);
    setSS(0);
    setMM(0);
    setIsActive(false);
  }

  /**
   * format number to time format
   * @param number
   */
  function format(number) {
    return (number + "").length === 1 ? "0" + number : number + "";
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMS((ms) => ms + 1);
        setTotalMilliSeconds((totalMilliSeconds) => totalMilliSeconds + 1);
        if (ms > 98) {
          setSS((ss) => ss + 1);
          setTotalSeconds((totalSeconds) => totalSeconds + 1);
          setMS(() => 0);
        }
        if (ss >= 60) {
          setMM((mm) => mm + 1);
          setTotalMinutes((totalMinutes) => totalMinutes + 1);
          setSS((ss) => 0);
        }
      }, 10);
    } else if (!isActive && ss !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, ms]);

  return (
    <div className="app">
      <div className="time">
        {format(mm)}:{format(ss)}:{format(ms)}
      </div>
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
        <IconButton onClick={remove} color="secondary" component="span">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Timer;
