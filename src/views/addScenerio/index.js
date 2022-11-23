import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "./../../App";
import uuid from "react-uuid";
import Tooltip from "../../components/tooltip";
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate= useNavigate();
  const { setScenerios, scenerios, setVehicles } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [time, setTime] = useState(1);
  const [validateMesaage, setValidateMessage] = useState({
    name: "",
    time: "",
  });
  console.log("scenerios", scenerios);
  console.log({ validateMesaage });
  const addScenario = () => {
    if (name && time >= 1) {
      setValidateMessage({ name: "", time: "" });
      setScenerios((scenerios) => [
        ...scenerios,
        {
          scenarioId: uuid(),
          scenarioName: name,
          time,
        },
      ]);
    } else {
      if (name === "")
        setValidateMessage((mesg) => ({
          ...mesg,
          name: "Name cannot be empty",
        }));
      if (time < 1)
        setValidateMessage((mesg) => ({
          ...mesg,
          time: "Time needs to be non-zero",
        }));
    }
    setVehicles((vals) => ({ ...vals, [name]: [] }));
  };

  const resetScenario = () => {
    setName("");
    setTime(1);
  };

  return (
    <div style={{ width: "80vw" }}>
      <h2>Scenario/add</h2>
      <div className="box">
        <div className="box__top">Add Scenario</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <span>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              Scenario name
            </label>
            <Tooltip
              direction="top"
              content={validateMesaage.name}
              shouldShow={validateMesaage.name ? true : false}
            >
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              Scenario time(seconds)
            </label>
            <Tooltip
                          direction="top"
                          content={validateMesaage.time}
                          shouldShow={validateMesaage.time ? true : false}
            >
            <input
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              type="number"
              min="1"
            />
            </Tooltip>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "60%",
          }}
        >
          <button style={{ backgroundColor: "green" }} onClick={addScenario}>
            Add
          </button>
          <button style={{ backgroundColor: "orange" }} onClick={resetScenario}>
            Reset
          </button>
          <button style={{ backgroundColor: "grey" }} onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
