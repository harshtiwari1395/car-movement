import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./../../App";
import uuid from 'react-uuid';

export default () => {
  const { setScenerios, scenerios } = useContext(GlobalContext);
  const [name, setName]= useState("");
  const [time, setTime]= useState(0);
  console.log("scenerios", scenerios);
  const addScenario= ()=>{
    setScenerios(scenerios=> ([...scenerios,  {
      scenarioId: uuid(),
      scenarioName: name,
      time
    }
  ]))
  };

  const resetScenario= ()=>{
    setName("");
    setTime(0);
  };

  return (
    <div>
      <h2>Scenario/add</h2>
      <div className="box">
        <div className="box__top">Add Scenario</div>
        <div className="box__content">
            <div style={{display: "flex"}}>
          <span>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
             Scenario name
            </label>
            <input
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              value={name}
              onChange={e=> setName(e.target.value)}
            />
          </span>
          <span>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              Scenario time(seconds)
            </label>
            <input
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              value={time}
              onChange={e=> setTime(e.target.value)}
              type="number"
            />
          </span>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <button onClick={addScenario}>Add</button>
          <button onClick={resetScenario}>Reset</button>
          <button onClick={()=>{}}>Go Back</button>
        </div>
      </div>
    </div>
  );
};
