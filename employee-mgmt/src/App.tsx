import "./App.css";
import EmployeeTable from "./EmployeeTable";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import AddDialog from "./AddDialog";
import { useEffect, useState } from "react";
import { Employee } from "./interfaces/Employee";

function App() {
  const [open, setOpen] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res: Response) => res.json())
      .then((result: Employee[]) => {
        setEmployees(result);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setNewName(value);
    /* POST new name here */
  };

  const handleChangeStatus = (status: string, id: number) => {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === id) {
          return { ...employee, status: status };
        } else {
          return employee;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>Employees</h1>
      <EmployeeTable
        employees={employees}
        changeStatus={handleChangeStatus}
      />
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
