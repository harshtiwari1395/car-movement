import Modal from "../../components/modals/components/Modal";
import ModalBody from "../../components/modals/components/ModalBody";
import ModalHeader from "../../components/modals/components/ModalHeader";
import ModalFooter from "../../components/modals/components/ModalFooter";
import Select from "react-dropdown-select";
import {useState} from "react"

export default function NewTicketModal({close}) {
  const [category, setCategory]= useState({ value: 'bug', label: 'Bug' });
  const [title, setTitle] = useState("");  

  return (
    <Modal data-testid="add-ticket-modal">
      <ModalHeader>
        <h3>Create new ticket</h3>
      </ModalHeader>
      <ModalBody>
      {/* <Select  value= {category} onChange={(value)=>setCategory(value) }/> */}
      <br/>
      <input placeholder= {"Ticket details..."} className="form-control" value={title} onChange= {e=> setTitle(e.target.value)}></input>
        
      </ModalBody>
      <ModalFooter>
      <button disabled={!title} className="btn btn-primary" onClick={()=> ({})}>Create Ticket</button>
      <button onClick={close} className="btn btn-light">Close</button>
      </ModalFooter>
    </Modal>
  );
}