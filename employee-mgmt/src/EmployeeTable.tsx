import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Employee } from "./Employee";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res: Response) => res.json())
      .then((result: Employee[]) => {
        setEmployees(result);
      });
  }, []);

  const handleChange = (event: SelectChangeEvent, index: number) => {
    employees[index].status = event.target.value;
    setEmployees(employees);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee: Employee, index: number) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={employee.status}
                      label="Age"
                      onChange={(event) => handleChange(event, index)}
                    >
                      <MenuItem value={"Added"}>Added</MenuItem>
                      <MenuItem value={"In Check"}>In Check</MenuItem>
                      <MenuItem value={"Approved"}>Approved</MenuItem>
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Inactive"}>Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
