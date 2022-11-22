import React, { Fragment, useState, useContext } from "react";
import NewColumnModal from "./NewColumnModal";
import NewTicketModal from "./NewTicketModal";
import ModalRoot from "../../components/modals/components/ModalRoot";
import ModalService from "../../components/modals/services/ModalService";
import "./table.scss";

const TableComponent = ({scenerios, vehicles}) => {
  // const {vehicles, setScenerios, setVehicles, scenerios, scenarioDropdownValues} = useContext(GlobalContext);
  const modifiedScenarios= scenerios.reduce((acc, item)=>{
    acc.push({...item, vehiclesCount:  vehicles[item.scenarioId]?.length || 0 });
    return acc;
  }, []);

  console.log({modifiedScenarios});
  const [tableData, setTableData] = useState(
  //   [
  //   {
  //     scenarioId: "Scenario ID",
  //     scenarioName: "Scenario Name",
  //     time: "Scenario Time",
  //     vehiclesCount: "Number of Vehicles",
  //   },
  // ]
  modifiedScenarios
  );
  console.log({scenerios});
  const deleteHandler = (index) => {
    console.log(index);
    let tableDataCopy = [...tableData];
    tableDataCopy.splice(index, 1);
    setTableData(tableDataCopy);
  };

  const editHandler = () => {};
  const headers = [
    "Scenario ID",
    "Scenario Name",
    "Scenario Time",
    "Number of Vehicles",
    "Add Vehicle",
    "Edit",
    "Delete",
  ];
  const openAddModal = () => {
    ModalService.open(NewTicketModal, {  });
  };
  const openEditModal = () => {
    ModalService.open(NewColumnModal, {  });
  };
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
                <td>{ele.scenarioId}</td>
                <td>{ele.scenarioName}</td>
                <td>{ele.time}</td>
                <td>{ele.vehiclesCount}</td>
                <td>
                  <a href="#" onClick={openAddModal}>
                    Add Vehicle
                  </a>
                </td>
                <td>
                  <a href="#" onClick={openEditModal}>
                    Edit
                  </a>
                </td>
                <td>
                  <a href="#" onClick={(e) => deleteHandler()}>
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
