import React, { useState } from "react";
import "./index.scss";

const Tooltip = (props) => {
  let timeout;
  //const [active, setActive] = useState(props.shouldShow);
  console.log({active: props.shouldShow});
  // const showTip = () => {
  //   timeout = setTimeout(() => {
  //     setActive(true);
  //   }, props.delay || 400);
  // };

  // const hideTip = () => {
  //   clearInterval(timeout);
  //   setActive(false);
  // };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      // onMouseEnter={showTip}
      // onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {props.shouldShow && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
