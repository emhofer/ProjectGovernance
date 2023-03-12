import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import formatSelect from "../functions/formatSelect";
import axios from "axios";

const getProjectData = async (id) => {
  const response = await fetch(`http://localhost:3001/projects/${id}`);
  const json = response.json();
  return json;
};

function Project() {
  const [project, setProject] = useState();
  const { id } = useParams();

  useEffect(() => {
    formatSelect();
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
      if (project.updates) {
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
            updates: [
              {
                date: new Date(formObject.project["update-date"]).toISOString(),
                update: formObject.project["update-update"],
                nextsteps: formObject.project["update-nextsteps"],
              },
            ],
          },
        };
      }
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
    const response = await axios.put(
      `http://localhost:3001/projects/${id}`,
      payload
    );
    let update = await getProjectData(id);
    setProject(update[0].info);
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
            <p className="info">{project.name}</p>
            <p className="heading">Owner</p>
            <p className="info">{project.owner}</p>
            <p className="heading">Start</p>
            <p className="info">{project.start.substring(0, 10)}</p>
          </div>
          <div className="block1">
            <p className="heading">Reason</p>
            <p className="multiLine info">{project.reason}</p>
            <p className="heading">Description</p>
            <p className="multiLine info">{project.description}</p>
            <p className="heading">Goals</p>
            <p className="multiLine info">{project.goals}</p>
          </div>
          <div className="block1">
            <label className="heading" htmlFor="status">
              Status
            </label>
            <select
              name="status"
              id="status"
              className="info"
              onChange={formatSelect}
              defaultValue={project.status}
            >
              <option value="On Track">On Track</option>
              <option value="Delayed">Delayed</option>
              <option value="On Hold">On Hold</option>
              <option value="Closed">Closed</option>
            </select>
            <label className="heading" htmlFor="delayreason">
              Delay Reason
            </label>
            <select
              name="delayreason"
              id="delayreason"
              className="info"
              defaultValue={project.delayreason}
            >
              <option value="-">-</option>
              <option value="IT Resources">IT Resources</option>
              <option value="FI Resources">FI Resources</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="block1">
            <label className="heading" htmlFor="update-date">
              Date
            </label>{" "}
            <input
              type="date"
              name="update-date"
              id="update-date"
              className="info-update"
            />
            <label className="heading" htmlFor="update-update">
              Update
            </label>{" "}
            <textarea
              name="update-update"
              id="update-update"
              cols="30"
              rows="5"
              placeholder="What is the most recent status update?"
              className="info-update"
            ></textarea>{" "}
            <label className="heading" htmlFor="update-nextsteps">
              Next Steps
            </label>
            <textarea
              name="update-nextsteps"
              id="update-nextsteps"
              cols="30"
              rows="5"
              placeholder="What are the next steps to take?"
              className="info-update"
            ></textarea>{" "}
            <button type="submit">Save</button>
            <div className="container">
              {!project.updates
                ? ""
                : project.updates.sort(compare).map((item) => {
                    return (
                      <div className="card">
                        <p className="small">{item.date.substring(0, 10)}</p>
                        <p className="blue">
                          <strong>Update:</strong>
                        </p>
                        <p className="small multiline">{item.update}</p>
                        <p className="blue">
                          <strong>Next steps:</strong>
                        </p>
                        <p className="small multiline">{item.nextsteps}</p>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Project;
