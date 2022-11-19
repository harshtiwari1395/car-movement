import React, { useContext, useState, useRef } from "react";
import "./index.scss";
import { GlobalContext } from "../../App";
import Select from "react-dropdown-select";

const VehicleTracker = ({ vehicles, scenarioId }) => {
  return (
    <div id="OverviewText4">
      {scenarioId &&
        vehicles[scenarioId] &&
        vehicles[scenarioId].map((item) => {
          console.log({ item });
          return (
            <div
              key={item.vehicleName}
              style={{
                top: item.initialPositionY,
                left: item.initialPositionX,
                backgroundColor: item.color,
                borderRadius: "50%",
                height: 20,
                width: 20,
              }}
            />
          );
        })}
    </div>
  );
};
export default () => {
  const {
    vehicles,
    setScenerios,
    setVehicles,
    scenerios,
    scenarioDropdownValues,
  } = useContext(GlobalContext);
  const [selectedScenario, setSelectedScenario] = useState(null);
  console.log({ vehicles, scenerios });
  const locationHandler = useRef(null);
  const startSimulation = () => {
    if(!locationHandler.current )
    {    const vehiclesCopy = { ...vehicles };
    locationHandler.current = setInterval(() => {
      // if(){
      //   conditional for running
      // }
      console.log("vehiclesCopy[selectedScenario]", vehiclesCopy[selectedScenario]);
      const modifiedVehicles =
        vehiclesCopy[selectedScenario] &&
        vehiclesCopy[selectedScenario].map((item) => {
          switch (item.direction) {
            case "forward":
              if(item.initialPositionX+item.speed<=780)
                item.initialPositionX += item.speed;
              else
                item.initialPositionX=780  
              break;
            case "backward":
              if(item.initialPositionX-item.speed>=0)
                item.initialPositionX -= item.speed;
              else
                item.initialPositionX=0  
              break;
            case "up":
              if(item.initialPositionY-item.speed>=0)
                item.initialPositionY -= item.speed;
              else 
                item.initialPositionY =0  
              break;
            case "down":
              if(item.initialPositionY+item.speed<=780)
                item.initialPositionY += item.speed;
              else 
                item.initialPositionY =780
              break;
            default:
              break;
          }
        });

      setVehicles({...vehiclesCopy, selectedScenario:  modifiedVehicles});
    }, 1000);
    }
  };

  const stopSimulation = () => {
    clearInterval(locationHandler.current);
  };

  return (
    <div>
      <div className="box">
        <div className="box__top">Scenario</div>
        <div className="box__content">
          <Select
            options={scenarioDropdownValues}
            onChange={(value) => setSelectedScenario(value[0].scenarioId)}
          />

          <button onClick={startSimulation}>Start Simulation</button>
          <button onClick={stopSimulation}>Stop Simulation</button>

          {/* <div id="OverviewText4">
            <div />
          </div> */}
          <VehicleTracker vehicles={vehicles} scenarioId={selectedScenario} />
        </div>
      </div>
    </div>
  );
};
