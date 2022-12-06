import "./App.css";
import EmployeeTable from "./EmployeeTable";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import AddDialog from "./AddDialog";

function App() {
  const [open, setOpen] = React.useState(false);
  const [newName, setNewName] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setNewName(value);
    /* POST new name here */
  };

  return (
    <div className="App">
      <h1>Employees</h1>
      <EmployeeTable />
      <Fab
        className="fab"
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <AddDialog open={open} onClose={handleClose} />
    </div>
  );
}

export default App;
