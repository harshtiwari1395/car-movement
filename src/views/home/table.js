import React, { Fragment, useState } from "react";
import NewTicketModal from "./NewTicketModal";
import ModalRoot from "../../components/modals/components/ModalRoot";
import ModalService from "../../components/modals/services/ModalService";
import "./table.scss";

const TableComponent = ({vehicles, selectedScenario, setVehicles}) => {
  console.log({vehicles, selectedScenario, all:  vehicles[selectedScenario]});
  const [tableData, setTableData] = useState([
    // {
    //   vehicleId: 123,
    //   vehicleName: "Scenario Name",
    //   positionX: 2,
    //   positionY: 1,
    //   speed: 10,
    //   direction: "forward",
    // },
    ...vehicles[selectedScenario.scenarioId]
  ]);

  const deleteHandler = (index) => {
    console.log(index);
    let tableDataCopy = [...tableData];
    tableDataCopy.splice(index, 1);
    // setTableData(tableDataCopy);
    setVehicles(vehicles=> ({...vehicles, [selectedScenario.scenarioId]: tableDataCopy}))
  };

  const openEditModal = () => {
    ModalService.open(NewTicketModal, {  });
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
                  <a href="#" onClick={openEditModal}>
                    Edit
                  </a>
                </td>
                <td>
                  <a href="#" onClick={(rowIndex) => deleteHandler(rowIndex)}>
                    Delete
                  </a>
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
