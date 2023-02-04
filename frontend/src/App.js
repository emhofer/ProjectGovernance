import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

const projects = [
  {
    department: "Finance",
    number: 101,
    name: "KPIs for Finance Department",
    owner: "Finance Manager",
    start: new Date().toLocaleDateString(),
    reason: "Default project reason.",
    description: "Default project description.",
    goals: "Default project goals.",
    members: [
      {
        name: "Peter Emhofer",
        role: "Lead",
      },
    ],
    milestones: [
      {
        name: "Research KPIs",
        deadline: new Date().toLocaleDateString(),
      },
    ],
    investments: [
      {
        name: "Employee Resources",
      },
    ],
    updates: [
      {
        date: new Date().toLocaleDateString(),
        update: "Default project update.",
        nextsteps: "Default project next steps.",
      },
      {
        date: new Date().toLocaleDateString(),
        update: "Default project update.",
        nextsteps: "Default project next steps.",
      },
    ],
    status: "On Track",
    delayReason: "-",
  },
  {
    department: "Finance",
    number: 102,
    name: "Datawarehouse for Financial Data",
    owner: "Finance Manager",
    status: "Delayed",
    delayReason: "IT Resources",
  },
  ,
  {
    department: "Finance",
    number: 103,
    name: "R&D Planning Tool",
    owner: "Finance Manager",
    status: "On Hold",
    delayReason: "FI Resources",
  },
  ,
  {
    department: "Finance",
    number: 104,
    name: "CAPEX Reporting",
    owner: "Finance Manager",
    status: "Closed",
    delayReason: "-",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">Project Governance</header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Number</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Delay Reason</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((item) => {
              return (
                <tr key={item.number}>
                  <td>{item.department}</td>
                  <td>{item.number}</td>
                  <td>
                    <Link to="/project" state={item}>
                      {item.name}
                    </Link>
                  </td>
                  <td>{item.owner}</td>
                  <td
                    className={item.status
                      .toString()
                      .replace(" ", "")
                      .toLowerCase()}
                  >
                    {item.status}
                  </td>
                  <td>{item.delayReason}</td>
                </tr>
              );
            })}
            <tr>
              <td id="newProject" colSpan={6}>
                <Link to="/project">+</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
