import React from "react";

const Switch2 = ({ className, switch2, setSwitch2 }) => {
  return (
    <div className={className}>
      {switch2 === false ? (
        <button
          onClick={() => {
            setSwitch2(true);
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

      {switch2 === false ? (
        <button
          style={{
            backgroundColor: "var(--purple-)",
            color: "white",
            borderColor: "white",
          }}
          onClick={() => {
            setSwitch2(false);
          }}
        >
          OFF
        </button>
      ) : (
        <button
          onClick={() => {
            setSwitch2(false);
          }}
        >
          OFF
        </button>
      )}
    </div>
  );
};

export default Switch2;
