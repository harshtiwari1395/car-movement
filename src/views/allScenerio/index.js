import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../App";

import Table from "./table"
export default () => {
  const { setScenerios, scenerios, vehicles } = useContext(GlobalContext);
  console.log({setScenerios});
  return (
    <div>
      <h2>All Scenarios</h2>
      <div className="box">
        <div >
          <Table scenerios={scenerios} vehicles={vehicles} setScenerios={setScenerios}/>
        </div>
      </div>
    </div>
  );
};
