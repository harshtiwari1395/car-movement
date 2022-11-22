import React, { useContext, useState, useRef } from "react";
import "./index.scss";
import { GlobalContext } from "../../App";
// import Select from "react-dropdown-select";
import Select from "react-select";
import Table from "./table";
////REPLACE react-dropdown-select WITH REACT-SELCT
const VehicleTracker = ({ vehicles, scenario }) => {
  console.log("track", { vehicles, scenario });
  const scenarioId = scenario ? scenario.scenarioId: null;
  // console.log("veh", vehicles[scenarioId]);
  return (
    <div id="OverviewText4">
      {scenarioId &&
        vehicles[scenarioId] &&
        vehicles[scenarioId].map((item) => {
          return (
            <div
              key={item.vehicleName + item.time}
              style={{
                top: item.initialPositionY,
                left: item.initialPositionX,
                backgroundColor: item.color,
                borderRadius: "50%",
                height: 20,
                width: 20,
                display: item.display,
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
  const [selectedScenario, setSelectedScenario] = useState(
    scenarioDropdownValues.length > 0 ? scenarioDropdownValues[0] : null
  );
  const currentScenario = scenerios.find(
    (item) => item.scenarioId === selectedScenario
  );
  const locationHandler = useRef(null);
  const timeTracker = () =>
    setTimeout(
      () => stopSimulation(),
      selectedScenario ? selectedScenario.time * 1000 + 100 : 0
    );
  const startSimulation = () => {
    timeTracker();
    console.log("locationHandler.current", locationHandler.current);
    if (!locationHandler.current) {
      const vehiclesCopy = { ...vehicles };
      locationHandler.current = setInterval(() => {
        // if(){
        //   conditional for running
        // }
        console.log(
          "vehiclesCopy[selectedScenario]",
          vehiclesCopy[selectedScenario]
        );
        console.log({ vehiclesCopy, selectedScenario });
        const modifiedVehicles =
          vehiclesCopy[selectedScenario.scenarioId] &&
          vehiclesCopy[selectedScenario.scenarioId].map((item) => {
            switch (item.direction) {
              case "forward":
                if (item.initialPositionX + item.speed <= 780)
                  item.initialPositionX += item.speed;
                else item.display = "none";
                break;
              case "backward":
                if (item.initialPositionX - item.speed >= 0)
                  item.initialPositionX -= item.speed;
                else item.display = "none";
                break;
              case "up":
                if (item.initialPositionY - item.speed >= 0)
                  item.initialPositionY -= item.speed;
                else item.display = "none";
                break;
              case "down":
                if (item.initialPositionY + item.speed <= 780)
                  item.initialPositionY += item.speed;
                else item.display = "none";
                break;
              default:
                break;
            }
          });

        setVehicles({ ...vehiclesCopy, selectedScenario: modifiedVehicles });
      }, 1000);
    }
  };

  const stopSimulation = () => {
    clearInterval(locationHandler.current);
    locationHandler.current = null;
  };

  return (
    <div>
      <div className="box">
        <div className="box__top">Scenario</div>
        <div className="box__content">
          <Select
            defaultValue={selectedScenario}
            options={scenarioDropdownValues}
            onChange={(value) => setSelectedScenario(value)}
          />
          {selectedScenario ? (
            <Table
              vehicles={vehicles}
              scenerios={scenerios}
              selectedScenario={selectedScenario}
              setVehicles={setVehicles}
            />
          ) : null}
          <button onClick={startSimulation}>Start Simulation</button>
          <button onClick={stopSimulation}>Stop Simulation</button>
          <VehicleTracker
            vehicles={vehicles}
            // scenarioId={selectedScenario}
            scenario={selectedScenario}
          />
        </div>
      </div>
    </div>
  );
};
