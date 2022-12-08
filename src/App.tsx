import "./App.scss";
import EmployeeTable from "./components/EmployeeTable";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as React from "react";
import AddDialog from "./components/AddDialog";
import { useEffect, useState } from "react";
import { Employee } from "./interfaces/Employee";
import employeeData from "./data/employees.json";

function App() {
  const [open, setOpen] = React.useState(false);
  const [newEmployee, setNewEmployee] = React.useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    //  GET /employees/
    setEmployees(employeeData as Employee[]);
  }, []);

  const handleClickOpen = () => {
    setNewEmployee("");
    setOpen(true);
  };

  const handleClose = (newEmployeeName?: string) => {
    setOpen(false);

    //  POST /employees/
    if (newEmployeeName) {
      setNewEmployee(newEmployeeName);
      const newEmployee: Employee = {
        id: employees.length + 1,
        name: newEmployeeName,
        status: "Added",
      };

      setEmployees((current) => [...current, newEmployee]);
    }
  };

  const handleChangeStatus = (status: string, id: number) => {
    //  PATCH /employees/{employee_id}
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
        className="App-fab"
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
