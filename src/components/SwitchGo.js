import React from "react";

const SwitchGo = ({ className, switch1, switch2, switch3 }) => {
  return (
    <div className={className}>
      {console.log(switch1, switch2, switch3)}
      {(switch1 && switch2 && switch3) === false ? (
        <button style={{ backgroundColor: "red", color: "white" }}>
          NO WAY
        </button>
      ) : (
        <button style={{ backgroundColor: "green", color: "white" }}>
          GO !
        </button>
      )}
    </div>
  );
};

export default SwitchGo;
