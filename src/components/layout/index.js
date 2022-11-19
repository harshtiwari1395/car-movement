import React from "react";
import Header from "./../header";
import Sidebar from "../sidebar";

import "./index.scss";

export default ComposedComponent => () => (
  <div className="main">
    {/* <Header /> */}
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <ComposedComponent />
      </div>
    </div>
  </div>
);
