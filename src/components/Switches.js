import React, { useState } from "react";
import Switch1 from "./Switch1";
import Switch2 from "./Switch2";
import Switch3 from "./Switch3";
import SwitchGo from "./SwitchGo";
import ResetButton from "./ResetButton";

const Switches = ({ className }) => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className={className}>
      <div className="switches-left">
        <Switch1
          className="switch-button"
          switch1={switch1}
          setSwitch1={setSwitch1}
        />
        <Switch2
          className="switch-button"
          switch2={switch2}
          setSwitch2={setSwitch2}
        />
        <Switch3
          className="switch-button"
          switch3={switch3}
          setSwitch3={setSwitch3}
        />
        <ResetButton
          className="reset-button"
          setSwitch1={setSwitch1}
          setSwitch2={setSwitch2}
          setSwitch3={setSwitch3}
        />
      </div>
      <div className="switches-right">
        <SwitchGo
          className="switch-go"
          switch1={switch1}
          switch2={switch2}
          switch3={switch3}
        />
      </div>
    </div>
  );
};

export default Switches;
