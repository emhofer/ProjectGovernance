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
              <th>Project Name</th>
              <th>Project Owner</th>
              <th>Project Start</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{project.name}</td>
              <td>{project.owner}</td>
              <td>2023-01-01</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>Project Reason</th>
              <th>Project Description</th>
              <th>Project Goals</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table>
          <thead>
            <tr>
              <th>Project Team</th>
              <th>Project Milestones</th>
              <th>Project Investments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Member <br />
                Member <br />
                Member <br />
              </td>
              <td>
                Milestome <br />
                Milestome <br />
                Milestome <br />
              </td>
              <td>
                Investment <br />
                Investment <br />
                Investment <br />
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
                <select name="status" id="status">
                  <option value="ontrack">On Track</option>
                  <option value="delayed">Delayed</option>
                  <option value="onhold">On Hold</option>
                  <option value="closed">Closed</option>
                </select>
              </td>
              <td>
                <select name="status" id="status">
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
    </div>
  );
}

export default Project;
