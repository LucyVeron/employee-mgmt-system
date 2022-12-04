import { useEffect, useState } from 'react';
import './App.css';

export interface Employee {
  id: number;
  name: string;
  status: string;
}

function App() {

  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/employees')
    .then((res: Response) => res.json())
    .then((result: Employee[]) => {
      setEmployees(result);
    });
  }, [])

  return (
    <div className="App">
      <h1>Employees</h1>
      <ul>
        {employees.map((employee: Employee) => (
          <li key={employee.id}>{employee.name}: <strong>{employee.status}</strong></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
