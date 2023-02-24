import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { save } from "./store/projectSlice";
import { useDispatch } from "react-redux";

const getProjects = async () => {
  const response = await fetch("http://localhost:3001/projects");
  const json = response.json();
  return json;
};

function App() {
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      let response = await getProjects();
      setProjects(response);
    }
    fetchData();
  }, []);

  return (
    <div className="App page">
      <header>
        <h1>Project Governance</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Delay Reason</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link
                      to={"/project/"+item.id}
                      state={item.info}
                      onClick={() => dispatch(save({ name: "test", age:"23" }))}
                    >
                      {item.info.name}
                    </Link>
                  </td>
                  <td>{item.info.owner}</td>
                  <td
                    className={item.info.status
                      .toString()
                      .replace(" ", "")
                      .toLowerCase()}
                  >
                    {item.info.status}
                  </td>
                  <td>{item.info.delayreason}</td>
                </tr>
              );
            })}
            <tr>
              <td id="newProject" colSpan={6}>
                <Link to="/project/new">
                  <div className="cell">+</div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
