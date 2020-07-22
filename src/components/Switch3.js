import React from "react";

const Switch3 = ({ className, switch3, setSwitch3 }) => {
  return (
    <div className={className}>
      {switch3 === false ? (
        <button
          onClick={() => {
            setSwitch3(true);
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

      {switch3 === false ? (
        <button
          style={{
            backgroundColor: "var(--purple-)",
            color: "white",
            borderColor: "white",
          }}
          onClick={() => {
            setSwitch3(false);
          }}
        >
          OFF
        </button>
      ) : (
        <button
          onClick={() => {
            setSwitch3(false);
          }}
        >
          OFF
        </button>
      )}
    </div>
  );
};

export default Switch3;
