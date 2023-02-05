import { React, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import formatSelect from "../functions/formatSelect";

function Project() {
  const location = useLocation();
  const project = location.state;
  useEffect(() => {
    formatSelect();
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

  return (
    <div className="page">
      <Link to="/">Back to overview</Link>
      <h1>Project details</h1>
      <form action="">
        <div className="charter">
          <div className="block1">
            <div>
              <p className="heading">Name</p>
              <p className="info">{project.name}</p>
            </div>
            <div>
              <p className="heading">Owner</p>
              <p className="info">{project.owner}</p>
            </div>
            <div>
              <p className="heading">Start</p>
              <p className="info">{project.start.substring(0, 10)}</p>
            </div>
          </div>
          <div className="block1">
            <div>
              <p className="heading">Reason</p>
              <p className="multiLine info">{project.reason}</p>
            </div>
            <div>
              <p className="heading">Description</p>
              <p className="multiLine info">{project.description}</p>
            </div>
            <div>
              <p className="heading">Goals</p>
              <p className="multiLine info">{project.goals}</p>
            </div>
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
              <option value="On Track">On Track</option>
              <option value="Delayed">Delayed</option>
              <option value="On Hold">On Hold</option>
              <option value="Closed">Closed</option>
            </select>
            <select name="delayreason" id="delayreason" className="cell">
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
            {project.updates &&
              project.updates.sort(compare).map((item) => {
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
