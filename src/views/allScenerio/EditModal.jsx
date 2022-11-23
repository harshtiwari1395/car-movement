import Modal from "../../components/modals/components/Modal";
import ModalBody from "../../components/modals/components/ModalBody";
import ModalHeader from "../../components/modals/components/ModalHeader";
import ModalFooter from "../../components/modals/components/ModalFooter";
import {useState} from "react";


export default function NewColumnModal({close, scenerios, setScenerios, rowIndex, 
setTableData, vehicles}) {
  console.log({scenerios, setScenerios, rowIndex});
  const [editScenario, setEditScenario]= useState(()=>{
    return scenerios[rowIndex]
  });
  const addHandler=()=>{
    const sceneriosCopy= [...scenerios];
    console.log({sceneriosCopy});
    sceneriosCopy.splice(rowIndex,1, editScenario);
    console.log({"mod":sceneriosCopy});
    setTableData(sceneriosCopy.reduce((acc, item)=>{
      acc.push({...item, vehiclesCount:  vehicles[item.scenarioId]?.length || 0 });
      console.log("acc", acc);
      return acc;
    }, []))
    setScenerios(sceneriosCopy);
    close();
  };

  return (
    <Modal data-testid="column-modal">
      <ModalHeader>
        <h2>Edit Scenario</h2>
      </ModalHeader>
      <ModalBody>
    <div>

      <div className="box">
        <div className="box__content">
            <div style={{display: "flex"}}>
          <span>
            <label
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
             Scenario name
            </label>
            <input
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              value={editScenario.scenarioName}
              onChange={e=> setEditScenario(val=> ({...val,"scenarioName": e.target.value }))}
            />
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
            <input
              style={{
                display: "flex",
                flexDirection: "column",
              }}
               value={editScenario.time}
               onChange={e=> setEditScenario(val=> ({...val,"time": Number(e.target.value) }))}
              type="number"
              min="1"
            />
          </span>
          </div>
        </div>
      </div>
    </div>
      </ModalBody>
      <ModalFooter>
        <button disabled={!(editScenario.scenarioName && editScenario.time)} onClick={addHandler}
         className="btn btn-primary">Edit</button>
        <button onClick={close} className="btn btn-danger">Close</button>
      </ModalFooter>
    </Modal>
  );
}