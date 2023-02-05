import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import formatSelect from "../functions/formatSelect";

function NewProject() {
  useEffect(() => {
    formatSelect();
  }, []);
  return (
    <div className="page">
      <Link to="/">Back to overview</Link>
      <h1>Add project</h1>
      <form action="">
        <div className="charter">
          <div className="block1">
            <label htmlFor="name">Name</label>
            <label htmlFor="owner">Owner</label>
            <label htmlFor="start">Start</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Project Name"
              className="cell"
            />
            <input
              type="text"
              name="owner"
              id="owner"
              placeholder="Project Owner"
              className="cell"
            />
            <input type="date" name="start" id="start" className="cell" />
          </div>
          <div className="block1">
            <label htmlFor="reason">Reason</label>
            <label htmlFor="description">Description</label>
            <label htmlFor="goals">Goals</label>
            <textarea
              name="reason"
              id="reason"
              cols="30"
              rows="5"
              placeholder="What is the reason for starting this project?"
            ></textarea>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="Short description of the main points."
            ></textarea>
            <textarea
              name="goals"
              id="goals"
              cols="30"
              rows="5"
              placeholder="What should this project accomplish?"
            ></textarea>
          </div>
          {/* <div className="block2">
          <label>Team</label>
          <label>Role</label>
          <label>Milestones</label>
          <label>Deadline</label>
          <label>Investments</label>
          <label>Amount</label>
          <input type="text" name="team" id="team" placeholder="Member" />{" "}
          <input type="text" name="role" id="role" placeholder="Role" />{" "}
          <input
            type="text"
            name="milestone"
            id="milestone"
            placeholder="Milestone"
          />
          <input type="date" name="deadline" id="deadline" />
          <input
            type="text"
            name="investment"
            id="investment"
            placeholder="Investment"
          />{" "}
          <input type="number" name="amount" id="amount" />
        </div> */}
          <div className="block1">
            <label htmlFor="status">Status</label>
            <label htmlFor="delayreason">Delay Reason</label>
            <br />
            <select name="status" id="status" className="cell">
              <option value="On Track">On Track</option>
              <option value="Delayed">Delayed</option>
              <option value="On Hold">On Hold</option>
              <option value="Closed">Closed</option>
            </select>
            <select name="delayreason" id="delayreason" className="cell">
              <option value="none">-</option>
              <option value="IT Resources">IT Resources</option>
              <option value="FI Resources">FI Resources</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewProject;
