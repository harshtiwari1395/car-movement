import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../App";
import Table from "./table"
export default () => {
  const { setScenerios, scenerios, vehicles } = useContext(GlobalContext);
  console.log({setScenerios});
  return (
    <div>
      <div className="box">
        <div className="box__top">
          <Table scenerios={scenerios} vehicles={vehicles} setScenerios={setScenerios}/>
        </div>
        <div className="box__content"></div>
      </div>
    </div>
  );
};
