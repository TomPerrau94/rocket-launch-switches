import React from "react";

const ResetButton = ({ className, setSwitch1, setSwitch2, setSwitch3 }) => {
  return (
    <div className={className}>
      <button
        onClick={() => {
          setSwitch1(false);
          setSwitch2(false);
          setSwitch3(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
