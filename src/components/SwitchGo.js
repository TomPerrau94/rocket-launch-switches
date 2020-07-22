import React from "react";

const SwitchGo = ({ className, switch1, switch2, switch3 }) => {
  return (
    <div className={className}>
      {console.log(switch1, switch2, switch3)}
      {(switch1 && switch2 && switch3) === false ? (
        <button style={{ backgroundColor: "red", color: "white" }}>
          NOT READY
        </button>
      ) : (
        <button style={{ backgroundColor: "green", color: "white" }}>
          LAUNCH !
        </button>
      )}
    </div>
  );
};

export default SwitchGo;
