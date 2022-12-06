import "./App.css";
import EmployeeTable from "./EmployeeTable";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import AddDialog from "./AddDialog";
import { useEffect, useState } from "react";
import { Employee } from "./interfaces/Employee";
import employeeData from "./data/employees.json";

function App() {
  const [open, setOpen] = React.useState(false);
  const [newName, setNewName] = React.useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    //  GET /employees/
    setEmployees(employeeData as Employee[]);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = (value: string) => {
    //  PATCH /employees/{employee_id}
    setOpen(false);
    setNewName(value);
    const newEmployee: Employee = {
      id: employees.length + 1,
      name: value,
      status: "Added",
    };

    setEmployees((current) => [...current, newEmployee]);
  };

  const handleChangeStatus = (status: string, id: number) => {
    //  POST /employees/
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
      <EmployeeTable employees={employees} changeStatus={handleChangeStatus} />
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
