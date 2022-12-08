import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Employee } from "../interfaces/Employee";
import Status from "./Status";

export default function EmployeeTable(props: any) {
  const handleChange = (status: string, employeeId: number) => {
    props.changeStatus(status, employeeId);
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
          {props.employees.map((employee: Employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>
                <Status employee={employee} change={handleChange} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
