import React, { createContext, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/index";
import Other from "./views/other/index";
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
  const [vehicles, setVehicles] = useState([
    {
      vehicleId: 123,
      vehicleName: "testVehical",
      initialPositionX: 50,
      initialPositionY: 50,
      speed:2,
      direction: 0,
      scenarioId: 1
    }
  ]);
  const [scenerios, setScenerios] = useState([
    {
      scenarioId: 1,
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
