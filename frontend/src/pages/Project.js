import { React, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import formatSelect from "../functions/formatSelect";
import { useSelector, useDispatch } from "react-redux";
import { save } from "../store/projectSlice";
import axios from "axios";

const getProjectData = async (id) => {
  const response = await fetch(`http://localhost:3001/projects/${id}`);
  const json = response.json();
  return json;
};

function Project() {
  // const location = useLocation();
  // const projectBefore = location.state;
  const [project, setProject] = useState();
  // const pj = useSelector((state) => state.project.value);
  const { id } = useParams();

  useEffect(() => {
    formatSelect();
    console.log("formatted");
  }, [project]);

  useEffect(() => {
    async function fetchData() {
      let response = await getProjectData(id);
      setProject(response[0].info);
    }
    fetchData();
  }, []);

  const compare = (a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const formObject = { project: JSON.parse(JSON.stringify(formProps)) };
    let payload = {};
    if (formObject.project["update-update"]) {
      payload = {
        id,
        project: {
          ...project,
          status: formObject.project.status,
          delayreason: formObject.project.delayreason,
          updates: [
            ...project.updates,
            {
              date: new Date(formObject.project["update-date"]).toISOString(),
              update: formObject.project["update-update"],
              nextsteps: formObject.project["update-nextsteps"],
            },
          ],
        },
      };
    } else {
      payload = {
        id,
        project: {
          ...project,
          status: formObject.project.status,
          delayreason: formObject.project.delayreason,
        },
      };
    }
    console.log(payload);
    const test = {};
    const response = await axios.put(
      `http://localhost:3001/projects/${id}`,
      payload
    );
    console.log(response);
    window.location.reload();
  };

  if (!project) {
    return <></>;
  }

  return (
    <div className="page">
      <Link to="/">Back to overview</Link>
      <h1>Project details</h1>
      <form onSubmit={handleSubmit}>
        <div className="charter">
          <div className="block1">
            <p className="heading">Name</p>
            <p className="heading">Owner</p>
            <p className="heading">Start</p>
            <p className="info">{project.name}</p>
            <p className="info">{project.owner}</p>
            <p className="info">{project.start.substring(0, 10)}</p>
          </div>
          <div className="block1">
            <p className="heading">Reason</p>
            <p className="heading">Description</p>
            <p className="heading">Goals</p>
            <p className="multiLine info">{project.reason}</p>
            <p className="multiLine info">{project.description}</p>
            <p className="multiLine info">{project.goals}</p>
          </div>
          {/* <div className="block2">
          <label>Team</label>
          <label>Role</label>
          <label>Milestones</label>
          <label>Deadline</label>
          <label>Investments</label>
          <label>Amount</label>
        </div> */}
          <div className="block1">
            <label htmlFor="status">Status</label>
            <label htmlFor="delayreason">Delay Reason</label>
            <br />
            <select
              name="status"
              id="status"
              className="cell"
              onChange={formatSelect}
              defaultValue={project.status}
            >
              {/* <option value={project.status} hidden selected>
                {project.status}
              </option> */}
              <option value="On Track">On Track</option>
              <option value="Delayed">Delayed</option>
              <option value="On Hold">On Hold</option>
              <option value="Closed">Closed</option>
            </select>
            <select
              name="delayreason"
              id="delayreason"
              className="cell"
              defaultValue={project.delayreason}
            >
              <option value="-">-</option>
              <option value="IT Resources">IT Resources</option>
              <option value="FI Resources">FI Resources</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="block1">
            <label htmlFor="update-date">Date</label>{" "}
            <label htmlFor="update-update">Update</label>{" "}
            <label htmlFor="update-nextsteps">Next Steps</label>
            <input
              type="date"
              name="update-date"
              id="update-date"
              className="info-update"
            />
            <textarea
              name="update-update"
              id="update-update"
              cols="30"
              rows="5"
              placeholder="What is the most recent status update?"
              className="info-update"
            ></textarea>{" "}
            <textarea
              name="update-nextsteps"
              id="update-nextsteps"
              cols="30"
              rows="5"
              placeholder="What are the next steps to take?"
              className="info-update"
            ></textarea>{" "}
            {!project.updates
              ? ""
              : project.updates.sort(compare).map((item) => {
                  return (
                    <>
                      <p className="info info-update">
                        {item.date.substring(0, 10)}
                      </p>
                      <p className="info info-update">{item.update}</p>
                      <p className="info info-update">{item.nextsteps}</p>
                    </>
                  );
                })}
          </div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Project;
