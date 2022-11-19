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
    scenario: {},
  });
  
  const addHandler=()=>{
    setVehicles(vehicles=>[...vehicles, vehicle]);
    console.log("addHandler", [...vehicles, vehicle]);
  }
  const resetHandler=()=>{
    setVehicle({
      vehicleId: uuid(),
      vehicleName: "",
      initialPositionX: 0,
      initialPositionY: 0,
      speed: 0,
      direction: 0,
      scenario: {},
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
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, vehicleName: value}))}
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
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, scenario: value}))}
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
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, speed: value}))}

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
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, initialPositionX: value}))}
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
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, initialPositionY: value}))}
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
                onChange={(value) => setVehicle(vehicle=> ({...vehicle, direction: value}))}
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
