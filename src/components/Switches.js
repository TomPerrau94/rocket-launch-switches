import React, { useState } from "react";

import ResetButton from "./ResetButton";
import Switch from "./Switch";

const Switches = ({ className }) => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className={className}>
      <div className="switches-left">
        <Switch switchButton={switch1} setSwitch={setSwitch1} />
        <Switch switchButton={switch2} setSwitch={setSwitch2} />
        <Switch switchButton={switch3} setSwitch={setSwitch3} />
        <ResetButton
          className="reset-button"
          setSwitch1={setSwitch1}
          setSwitch2={setSwitch2}
          setSwitch3={setSwitch3}
        />
      </div>

      {switch1 && switch2 && switch3 ? (
        <div className="switches-right go">LAUNCH !</div>
      ) : (
        <div className="switches-right not-ready">NOT READY</div>
      )}
    </div>
  );
};

export default Switches;
