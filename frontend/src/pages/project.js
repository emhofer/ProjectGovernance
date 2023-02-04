import { React } from "react";
import { Link, useLocation } from "react-router-dom";

function Project() {
  const location = useLocation();
  const project = location.state;
  return (
    <div>
      <Link to="/">Back to overview</Link>
      <div className="charter">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Start</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{project.name}</td>
              <td>{project.owner}</td>
              <td>{project.start}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>Reason</th>
              <th>Description</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="multiLine">{project.reason}</td>
              <td className="multiLine">{project.description}</td>
              <td className="multiLine">{project.goals}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Milestones</th>
              <th>Investments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {project.members.map((item) => {
                  return (
                    <>
                      {item.name} <br />
                    </>
                  );
                })}
              </td>
              <td>
                {project.milestones.map((item) => {
                  return (
                    <>
                      {item.name} <br />
                    </>
                  );
                })}
              </td>
              <td>
                {project.investments.map((item) => {
                  return (
                    <>
                      {item.name} <br />
                    </>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Delay Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select name="status" id="status" className="cell">
                  <option value="ontrack">On Track</option>
                  <option value="delayed">Delayed</option>
                  <option value="onhold">On Hold</option>
                  <option value="closed">Closed</option>
                </select>
              </td>
              <td>
                <select name="status" id="status" className="cell">
                  <option value="none">-</option>
                  <option value="itresources">IT Resources</option>
                  <option value="firesources">FI Resources</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="updates">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Update</th>
              <th>Next Steps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="date" name="update-date" id="" />
              </td>
              <td>
                <textarea
                  name="update-update"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td>
                <textarea
                  name="update-nextsteps"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            {project.updates.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.update}</td>
                    <td>{item.nextsteps}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Project;
