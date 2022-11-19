import React, { useState, useEffect, useContext } from "react";
import Select from "react-dropdown-select";
import { GlobalContext } from "../../App";
import uuid from 'react-uuid';
export default () => {
  const { vehicles, setScenerios, setVehicles, scenerios, scenarioDropdownValues } =
  useContext(GlobalContext);  
  const [vehicle, setVehicle] = useState({
    vehicleId: uuid(),
    vehicleName: "",
    initialPositionX: 0,
    initialPositionY: 0,
    speed: 0,
    direction: 0,
    color: ""
  });
  const [scenarioId, setScenarioId]= useState("");
  
  const addHandler=()=>{
    // setVehicles(vehicles=>[...vehicles, vehicle]);
    // console.log("addHandler", [...vehicles, vehicle]);
    console.log({scenarioId});
    const vehiclesCopy= {...vehicles};
     if(vehiclesCopy[scenarioId])
     {
      vehiclesCopy[scenarioId].push(vehicle);
     }
     else {
      vehiclesCopy[scenarioId]= [vehicle];
     }
     setVehicles(vehiclesCopy);
  }

  const resetHandler=()=>{
    setVehicle({
      vehicleId: uuid(),
      vehicleName: "",
      initialPositionX: 0,
      initialPositionY: 0,
      speed: 0,
      direction: 0,
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`
    });
  }
  const backHandler=()=>{
    
  }

  return (
    <div style={{ width: "100%" }}>
      <div className="box">
        <div className="box__top">Add vehicles</div>
        <div className="box__content" style={{ width: "80%" }}>
          <div style={{ display: "flex" }}>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Scenario list
              </label>
              <Select
                options={scenarioDropdownValues}
                onChange={(value) => setScenarioId(value[0].scenarioId)}
              /> 
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Vehicle name
              </label>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) => setVehicle(vehicle=> ({...vehicle, vehicleName: e.target.value}))}
              />
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Speed
              </label>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) => setVehicle(vehicle=> ({...vehicle, speed: Number(e.target.value)}))}

              />
            </span>
          </div>

          <div style={{ display: "flex" }}>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Position X
              </label>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) => setVehicle(vehicle=> ({...vehicle, initialPositionX: Number(e.target.value)}))}
              />
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Position Y
              </label>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) => setVehicle(vehicle=> ({...vehicle, initialPositionY: Number(e.target.value)}))}
              />
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Direction
              </label>
              <Select
                options={[{value: "forward", label : "forward"}, 
                          {value: "backward", label : "backward"},
                          {value: "up", label : "up"},
                          {value: "down", label : "down"}
                         ]}
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, direction: value[0].value}))}
              /> 
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button onClick={addHandler}>Add</button>
          <button onClick={resetHandler}>Reset</button>
          <button onClick={backHandler}>Go Back</button>
        </div>
      </div>
    </div>
  );
};
