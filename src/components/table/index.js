import React, {useState} from "react";

import "./index.scss";

const TableComponent = () => {
  const [tableData, setTableData] = useState([
    {
      scenarioId: "Scenario ID",
      scenarioName: "Scenario Name",
      scenarioTime: "Scenario Time",
      vehiclesCount: "Number of Vehicles",
    },
    {
      name: "name2",
      desc: "desc2",
      date: "date",
      time: "time",
    },
  ]);
  const deleteHandler= (index)=>{
    console.log(index);
    let tableDataCopy= [...tableData];
    tableDataCopy.splice(index, 1);
    setTableData(tableDataCopy);
  }
  const editHandler= ()=>{}
  const headers = ["Scenario ID", "Scenario Name", "Scenario Time", "Number of Vehicles", "Add Vehicle","Edit", "Delete"];
  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((item) => {
            return <th key={item}>{item}</th>;
          })}
          {/* <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Time</th>
          <th>Edit</th>
          <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {tableData.map((ele, rowIndex) => {
          return (
            <tr key={`tr-${rowIndex}`}>
              <td>{ele.name}</td>
              <td>{ele.desc}</td>
              <td>{ele.date}</td>
              <td>{ele.time}</td>
              <td>
                <a href="#" onClick={(e) => ({})}>
                  Add Vehicle
                </a>
              </td>
              <td>
                <a href="#" onClick={(e) => ({})}>
                  Edit
                </a>
              </td>
              <td>
              <a
                  href="#"
                  onClick={(e) => deleteHandler()}
                >
                  Delete
                </a>
              </td> 
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
