import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ initializeTime }) => {
  const [time, setTime] = useState(initializeTime);

  // start when code run
  useEffect(() => {
    const countTown = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(countTown);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime(initializeTime);
    }
  }, [time, initializeTime]);

  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;

  return (
    <>
      <h3>Timer</h3>
      <h4 className="timer">{formattedTime}</h4>
    </>
  );
};

export default Timer;
