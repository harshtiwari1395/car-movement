import React, { createContext, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/index";
import Layout from "./components/layout/index";
import AddScenario from "./views/addScenerio/index";
import AllScenario from "./views/allScenerio/index";
import AddVehical from "./views/addVehicle/index";
import "./App.scss";

const Comp = Layout(Home);
const AddScenarioWithLayout= Layout(AddScenario);
const AllScenarioWithLayout= Layout(AllScenario);
const AddVehicalWithLayout= Layout(AddVehical);

export const GlobalContext= createContext(null);
const App = () => {
  const [vehicles, setVehicles] = useState({"test": [
    {
      vehicleId: 123,
      vehicleName: "testVehical",
      initialPositionX: 400,
      initialPositionY: 400,
      speed:100,
      direction: "down",
      color : `#${Math.floor(Math.random()*16777215).toString(16)}`,
      display: true
    }
  ]});
  //change how vehicles are stores {scenario1: [...vehicls],scenario2: [...vehicls] }
  const [scenerios, setScenerios] = useState([
    {
      scenarioId: "test",
      scenarioName: "test",
      time: new Date(),
    }
  ]);
  const options= useCallback(()=>scenerios.reduce((acc, item)=>{
    acc.push({...item, label: item.scenarioName, value: item.scenarioId})
    return acc;
  }, []) , [scenerios]) ;
  return (
    <GlobalContext.Provider value={{vehicles, setScenerios, setVehicles, scenerios, scenarioDropdownValues: options()}}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Comp />} />
        <Route exact path="/addScenario" element={<AddScenarioWithLayout />} />
        <Route exact path="/allScenario" element={<AllScenarioWithLayout />} />
        <Route exact path="/addVehical" element={<AddVehicalWithLayout />} />
      </Routes>
    </BrowserRouter>
    </GlobalContext.Provider>
  );
};
export default App;
