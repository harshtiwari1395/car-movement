import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../App";
export default () => {
  const { setScenerios, scenerios } = useContext(GlobalContext);
  return (
    <div>
      <div className="box">
        <div className="box__top">
          <h3>All Scenario
          <button>hello</button>
          <button>hello</button>
          <button>hello</button>
          </h3>

        </div>
        <div className="box__content"></div>
      </div>
    </div>
  );
};
