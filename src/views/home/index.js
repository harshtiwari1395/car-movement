import React, { useContext, useState } from "react";
import "./index.scss";
import { GlobalContext } from "../../App";
import Select from "react-dropdown-select";

const VehicleTracker = ({vehicles}) => {
  return (
    <div id="OverviewText4">
      {vehicles.map((item, key)=>{
        return <div style={{
          top: 50,
          left: 50,
          backgroundColor: "red", borderRadius: "50%", height: 20, width: 20}}/>
      })
      }
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
  const [selectedValue, setSelectedValue] = useState(null);
  console.log({ vehicles, scenerios });
  return (
    <div>
      <div className="box">
        <div className="box__top">Scenario</div>
        <div className="box__content">
          <Select
            options={scenarioDropdownValues}
            onChange={(value) => setSelectedValue(value)}
          />

          <button>Start Simulation</button>
          <button>Stop Simulation</button>

          <div id="OverviewText4">
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};
