import React, { Fragment, useState, useContext, useCallback } from "react";
import EditModal from "./EditModal";
// import AddModal from "./AddModal";
import ModalRoot from "../../components/modals/components/ModalRoot";
import ModalService from "../../components/modals/services/ModalService";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import "./table.scss";



const TableComponent = ({scenerios, vehicles, setScenerios}) => {
  const modifiedScenarios= useCallback(()=> scenerios.reduce((acc, item)=>{
    acc.push({...item, vehiclesCount:  vehicles[item.scenarioId]?.length || 0 });
    console.log("acc", acc);
    return acc;
  }, []),[scenerios] );

  const [tableData, setTableData] = useState(
  //   [
  //   {
  //     scenarioId: "Scenario ID",
  //     scenarioName: "Scenario Name",
  //     time: "Scenario Time",
  //     vehiclesCount: "Number of Vehicles",
  //   },
  // ]
  // modifiedScenarios()
  ()=>scenerios.reduce((acc, item)=>{
    acc.push({...item, vehiclesCount:  vehicles[item.scenarioId]?.length || 0 });
    console.log("acc", acc);
    return acc;
  }, [])
  );
  console.log({modif: tableData})
  console.log( "modif2", scenerios.reduce((acc, item)=>{
    acc.push({...item, vehiclesCount:  vehicles[item.scenarioId]?.length || 0 });
    console.log("acc", acc);
    return acc;
  }, []));
  const deleteHandler = (index) => {
    console.log(index);
    let tableDataCopy = [...tableData];
    tableDataCopy.splice(index, 1);
    setTableData(tableDataCopy);
    setScenerios(tableDataCopy);

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
  // const openAddModal = () => {
  //   ModalService.open(AddModal, {  });
  // };
  const openEditModal = (rowIndex) => {
    ModalService.open(EditModal, { scenerios, setScenerios,
       rowIndex, setTableData, vehicles 
    });
  };
  const navigate = useNavigate();

  function handleAddClick() {
    navigate('/addVehical');
  }
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
                  {/* <a href="#" onClick={handleAddClick}>
                    Add Vehicle
                  </a> */}
                  <FontAwesomeIcon onClick={handleAddClick} icon={faPlus}/>

                </td>
                <td>
                  {/* <a href="#" onClick={()=>openEditModal(rowIndex)}>
                    Edit
                  </a> */}
                  <FontAwesomeIcon onClick={(e) => editHandler(rowIndex)} icon={faEdit}/>

                </td>
                <td>
                  {/* <a href="#" onClick={(e) => deleteHandler()}>
                    Delete
                  </a> */}
                  <FontAwesomeIcon onClick={(e) => deleteHandler(rowIndex)} icon={faTrash}/>
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
