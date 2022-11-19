import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default () => (
  <div className="main-sidebar main-sidebar--dark">
    <div className="main-sidebar__box">
      <h3>Dashboard</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addScenario">Add Scenario</Link>
        </li>
        <li>
          <Link to="/allScenario">All Scenario</Link>
        </li>
        <li>
          <Link to="/addVehical">Add Vehical</Link>
        </li>
      </ul>
    </div>
    {/* <div className="main-sidebar__box">
      <h3>Configuration</h3>
      <ul>
        <li>
          <Link to="">Settings</Link>
        </li>
        <li>
          <Link to="">Website</Link>
        </li>
      </ul>
    </div> */}
  </div>
);
