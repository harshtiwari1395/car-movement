import React, { Fragment, useState } from "react";
import EditVehicleModal from "./EditVehicleModal";
import ModalRoot from "../../components/modals/components/ModalRoot";
import ModalService from "../../components/modals/services/ModalService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./table.scss";

const TableComponent = ({scenerios, vehicles, selectedScenario, setVehicles}) => {
  const [tableData, setTableData] = useState(()=> {
    
    if(scenerios.length===0)
    { 
      return [];
    }
    else  
    {
      console.log({selectedScenario});
      return vehicles[selectedScenario?.scenarioId]
    };
  //   [
  //   // {
  //   //   vehicleId: 123,
  //   //   vehicleName: "Scenario Name",
  //   //   positionX: 2,
  //   //   positionY: 1,
  //   //   speed: 10,
  //   //   direction: "forward",
  //   // },
  //   ...vehicles[selectedScenario?.scenarioId]
  // ] : 
  // []
});
  console.log("here", vehicles[selectedScenario.scenarioId]);
  const deleteHandler = (index) => {
    console.log(index);
    let tableDataCopy = [...tableData];
    tableDataCopy.splice(index, 1);
    setTableData(tableDataCopy);
    setVehicles(vehicles=> ({...vehicles, [selectedScenario.scenarioId]: tableDataCopy}))
  };

  const openEditModal = (rowIndex) => {
    ModalService.open(EditVehicleModal, {setVehicles, setTableData, 
      rowIndex, vehicles,
      selectedScenarioId: selectedScenario? selectedScenario.scenarioId : null
    });
  };

  const headers = [
    "Vehicle ID",
    "Vehicle Name",
    "Position X",
    "Position Y",
    "Speed",
    "Direction",
    "Edit",
    "Delete",
  ];
  return (
    <Fragment>
      <ModalRoot/>
      <table className="table">
        <thead>
          <tr>
            {headers.map((item) => {
              return <th key={item}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((ele, rowIndex) => {
            return (
              <tr key={`tr-${rowIndex}`}>
                <td>{ele.vehicleId}</td>
                <td>{ele.vehicleName}</td>
                <td>{ele.initialPositionX}</td>
                <td>{ele.initialPositionY}</td>
                <td>{ele.speed}</td>
                <td>{ele.direction}</td>
                <td>
                  {/* <a href="#" onClick={()=>openEditModal(rowIndex)}>
                    Edit
                  </a> */}
                  <FontAwesomeIcon onClick={()=>openEditModal(rowIndex)} icon={faEdit} />
                </td>
                <td>
                  <FontAwesomeIcon onClick={() => deleteHandler(rowIndex)} icon={faTrash} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TableComponent;
