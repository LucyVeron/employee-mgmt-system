import { useEffect, useState } from "react";
import "./App.css";
import { Employee } from "./Employee";
import BasicTable from "./Table";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res: Response) => res.json())
      .then((result: Employee[]) => {
        setEmployees(result);
      });
  }, []);

  return (
    <div className="App">
      <h1>Employees</h1>
      <BasicTable employees={employees} />
    </div>
  );
}

export default App;
