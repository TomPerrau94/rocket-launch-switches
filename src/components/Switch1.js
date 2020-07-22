import React from "react";

const Switch1 = ({ className, switch1, setSwitch1 }) => {
  return (
    <div className={className}>
      {switch1 === false ? (
        <button
          onClick={() => {
            setSwitch1(true);
          }}
        >
          ON
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "var(--purple-)",
            color: "white",
            borderColor: "white",
          }}
        >
          ON
        </button>
      )}

      {switch1 === false ? (
        <button
          style={{
            backgroundColor: "var(--purple-)",
            color: "white",
            borderColor: "white",
          }}
          onClick={() => {
            setSwitch1(false);
          }}
        >
          OFF
        </button>
      ) : (
        <button
          onClick={() => {
            setSwitch1(false);
          }}
        >
          OFF
        </button>
      )}
    </div>
  );
};

export default Switch1;
