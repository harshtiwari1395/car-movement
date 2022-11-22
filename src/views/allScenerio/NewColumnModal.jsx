import Modal from "../../components/modals/components/Modal";
import ModalBody from "../../components/modals/components/ModalBody";
import ModalHeader from "../../components/modals/components/ModalHeader";
import ModalFooter from "../../components/modals/components/ModalFooter";
import {useState} from "react";
import { v4 as uuidv4 } from "uuid";


export default function NewColumnModal({close, columns, setColumns}) {
    const [colName, setColName]= useState("");
    const createColumn= ()=>{
      setColumns([...columns, { name: colName, stage: uuidv4() }]);
      close();
    }
  return (
    <Modal data-testid="column-modal">
      <ModalHeader>
        <h2>Edit modal</h2>
      </ModalHeader>
      <ModalBody>
      <input placeholder={"Add column title..."} className="form-control" value={colName} onChange={e=> setColName(e.target.value)}/>
      </ModalBody>
      <ModalFooter>
        <button disabled={!colName} onClick={createColumn} className="btn btn-primary">Create</button>
        <button onClick={close} className="btn btn-danger">Close</button>
      </ModalFooter>
    </Modal>
  );
}