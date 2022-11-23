import Modal from "../../components/modals/components/Modal";
import ModalBody from "../../components/modals/components/ModalBody";
import ModalHeader from "../../components/modals/components/ModalHeader";
import ModalFooter from "../../components/modals/components/ModalFooter";
import Select from "react-select";
import {useState} from "react"

export default function NewTicketModal({close ,setVehicles, setTableData, rowIndex, vehicles, currentVehicleDetails, scenarioDropdownValues, selectedScenarioId}) {
 const [vehicleDetails, setVehicleDetails] = useState(()=>{
  console.log({"vd": vehicles[selectedScenarioId][rowIndex]});
  return vehicles[selectedScenarioId][rowIndex]
 });
console.log({vehicleDetails});
//  {
//   vehicleId: uuid(),
//   vehicleName: "",
//   initialPositionX: 0,
//   initialPositionY: 0,
//   speed: 0,
//   direction: 0,
//   color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
//   display: "block",
// }
const shouldDisable=()=>{
  const keys= Object.keys(vehicleDetails);
  console.log({keys});
  return !keys.every(item=> vehicleDetails[item] !==null && vehicleDetails[item] !==undefined)
}
const editRow= ()=>{
  console.log("er", {vehicles, selectedScenarioId, vehicleDetails})
  setVehicles(vehicles=> {
    const vehCopy= {...vehicles};
    const modifiedRows= vehCopy[selectedScenarioId].splice(rowIndex,1, vehicleDetails);
    return {...vehCopy, [selectedScenarioId]: modifiedRows };
  }
    );
  // setTableData()
}
  return (
    <Modal data-testid="add-ticket-modal">
      <ModalHeader>
        <h3>Edit vehicle details</h3>
      </ModalHeader>
      <ModalBody>
      <div style={{ display: "flex" }}>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Vehicle name
              </label>
              <input
                value={vehicleDetails.vehicleName}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) =>
                  setVehicleDetails((vehicle) => ({
                    ...vehicle,
                    vehicleName: e.target.value,
                  }))
                }
              />
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Speed
              </label>
              <input
                value={vehicleDetails.speed}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) =>
                  setVehicleDetails((vehicle) => ({
                    ...vehicle,
                    speed: Number(e.target.value),
                  }))
                }
              />
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Position X
              </label>
              <input
                value={vehicleDetails.initialPositionX}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) =>
                  setVehicleDetails((vehicle) => ({
                    ...vehicle,
                    initialPositionX: Number(e.target.value),
                  }))
                }
              />
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Position Y
              </label>
              <input
                value={vehicleDetails.initialPositionY}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                onChange={(e) =>
                  setVehicleDetails((vehicle) => ({
                    ...vehicle,
                    initialPositionY: Number(e.target.value),
                  }))
                }
              />
            </span>
            <span>
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                Direction
              </label>
              <Select
                defaultValue= {{value: vehicleDetails.direction, label: vehicleDetails.direction}}
                options={[
                  { value: "forward", label: "forward" },
                  { value: "backward", label: "backward" },
                  { value: "up", label: "up" },
                  { value: "down", label: "down" },
                ]}
                onChange={(selectedValue) =>
                  setVehicleDetails((vehicle) => ({
                    ...vehicle,
                    direction: selectedValue.value,
                  }))
                }
              />
            </span>
          </div>
      </ModalBody>
      <ModalFooter>
        <button disabled={shouldDisable()} className="btn btn-primary" onClick={editRow}>Edit</button>
        <button onClick={close} className="btn btn-light">Close</button>
      </ModalFooter>
    </Modal>
  );
}