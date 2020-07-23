import React from "react";

const Switch = ({ switchButton, setSwitch }) => {
  return (
    <div>
      <button
        onClick={() => {
          setSwitch(true);
        }}
        className={switchButton ? "on" : "off"}
      >
        ON
      </button>
      <button
        onClick={() => {
          setSwitch(false);
        }}
        className={switchButton ? "off" : "on"}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
