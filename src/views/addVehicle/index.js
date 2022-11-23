import React, { useState, useEffect, useContext } from "react";
// import Select from "react-dropdown-select";
import Select from "react-select";
import { GlobalContext } from "../../App";
import uuid from "react-uuid";
import { useNavigate } from 'react-router-dom';
import Tooltip from "../../components/tooltip";

export default () => {
  const {
    vehicles,
    setScenerios,
    setVehicles,
    scenerios,
    scenarioDropdownValues,
  } = useContext(GlobalContext);
  const [vehicle, setVehicle] = useState({
    vehicleId: uuid(),
    vehicleName: "",
    initialPositionX: 0,
    initialPositionY: 0,
    speed: 0,
    direction: 0,
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    display: "block",
  });
  const [errorMessage, setErrorMessage] = useState({
    vehicleName: "",
    initialPositionX: "",
    initialPositionY: "",
    speed: "",
    direction: "",
    scenarioId: ""
  });
  const [scenarioId, setScenarioId] = useState("");
  const navigate= useNavigate();
  const addHandler = () => {
    const {
      vehicleName,
      initialPositionX,
      initialPositionY,
      speed,
      direction,
    } = vehicle;
    console.log("check", {vehicleName ,initialPositionX,  initialPositionY,  speed , scenarioId});
    if(vehicleName && initialPositionX && initialPositionY && speed  && direction && scenarioId)
    {
      const vehiclesCopy = { ...vehicles };
      if (vehiclesCopy[scenarioId]) {
        vehiclesCopy[scenarioId].push(vehicle);
      } else {
        vehiclesCopy[scenarioId] = [vehicle];
      }
      setVehicles(vehiclesCopy);
      setErrorMessage({
        vehicleName: "",
        initialPositionX: "",
        initialPositionY: "",
        speed: "",
        direction: "",
        scenarioId: ""
      });
    }
    else {
      if(!vehicleName)
      setErrorMessage(err=>({...err,"vehicleName" : "Name cannot be empty" }));
      if(!initialPositionX)
      setErrorMessage(err=>({...err,"initialPositionX" : "Position cannot be empty" }));
      if(!initialPositionY)
      setErrorMessage(err=>({...err,"initialPositionY" : "Position cannot be empty" }));
      if(!speed || speed===0)
      setErrorMessage(err=>({...err,"speed" : "Speed cannot be empty or 0" }));
      if(!direction)
      setErrorMessage(err=>({...err,"direction" : "Direction cannot be empty" }));
      if(!vehicleName)
      setErrorMessage(err=>({...err,"vehicleName" : "Vehicle name cannot be empty" }));
      if(!scenarioId)
      setErrorMessage(err=>({...err,"scenarioId" : "Scenario name cannot be empty" }));
      
    }
  };

  const resetHandler = () => {
    setVehicle({
      vehicleId: uuid(),
      vehicleName: "",
      initialPositionX: 0,
      initialPositionY: 0,
      speed: 0,
      direction: 0,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      display: "block",
    });
    setErrorMessage({
      vehicleName: "",
      initialPositionX: "",
      initialPositionY: "",
      speed: "",
      direction: "",
      scenarioId: ""
    });
  };
  const backHandler = () => {};

  return (
    <div style={{ width: "100%" }}>
      <div className="box">
        <div className="box__top">Add vehicles</div>
        <div  style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent:"space-around" }}>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Scenario list
              </label>
              <Tooltip content={errorMessage.scenarioId}
              shouldShow={errorMessage.scenarioId ? true : false}>
              <Select
                //defaultValue={}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: "200px",
                  }),
                }}
                options={scenarioDropdownValues}
                onChange={(value) => setScenarioId(value.scenarioId)}
              />
              </Tooltip>
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
              <Tooltip 
              content={errorMessage.vehicleName}
              shouldShow={errorMessage.vehicleName ? true : false}
              >
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) =>
                  setVehicle((vehicle) => ({
                    ...vehicle,
                    vehicleName: e.target.value,
                  }))
                }
              />
              </Tooltip>
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
              <Tooltip 
              content={errorMessage.speed}
              shouldShow={errorMessage.speed ? true : false}
              >
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                type= 'number'
                min="1"
                onChange={(e) =>
                  setVehicle((vehicle) => ({
                    ...vehicle,
                    speed: Number(e.target.value),
                  }))
                }
              />
              </Tooltip>
            </span>
          </div>

          <div style={{ display: "flex", justifyContent:"space-around" }}>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Position X
              </label>
              <Tooltip content={errorMessage.initialPositionX}
              shouldShow={errorMessage.initialPositionX ? true : false}>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                type= 'number'
                min="1"
                onChange={(e) =>
                  setVehicle((vehicle) => ({
                    ...vehicle,
                    initialPositionX: Number(e.target.value),
                  }))
                }
              />
              </Tooltip>
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
              <Tooltip content={errorMessage.initialPositionY}
              shouldShow={errorMessage.initialPositionY ? true : false}>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                type= 'number'
                min="1"
                onChange={(e) =>
                  setVehicle((vehicle) => ({
                    ...vehicle,
                    initialPositionY: Number(e.target.value),
                  }))
                }
              />
              </Tooltip >
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
              <Tooltip content={errorMessage.direction}
              shouldShow={errorMessage.direction ? true : false}>
              <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      width: "200px",
                    }),
                  }}
                options={[
                  { value: "forward", label: "forward" },
                  { value: "backward", label: "backward" },
                  { value: "up", label: "up" },
                  { value: "down", label: "down" },
                ]}
                onChange={(selectedValue) =>
                  setVehicle((vehicle) => ({
                    ...vehicle,
                    direction: selectedValue.value,
                  }))
                }
              />
              </Tooltip >
            </span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button style= {{backgroundColor: "green"}} onClick={addHandler}>Add</button>
          <button style= {{backgroundColor: "orange"}} onClick={resetHandler}>Reset</button>
          <button style= {{backgroundColor: "grey"}} onClick={()=> navigate("/")}>Go Back</button>
        </div>
      </div>
    </div>
  );
};
