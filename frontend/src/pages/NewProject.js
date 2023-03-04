import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import formatSelect from "../functions/formatSelect";
import axios from "axios";

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  const payload = { project: JSON.parse(JSON.stringify(formProps)) };
  const response = await axios.post(`http://localhost:3001/projects`, payload);
  window.location.href = "/";
};

function NewProject() {
  useEffect(() => {
    formatSelect();
  }, []);

  return (
    <div className="page">
      <Link to="/">Back to overview</Link>
      <h1>Add project</h1>
      <form onSubmit={handleSubmit}>
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
          <div className="block1">
            <label htmlFor="status">Status</label>
            <label htmlFor="delayreason">Delay Reason</label>
            <br />
            <select
              name="status"
              id="status"
              className="cell"
              onChange={formatSelect}
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewProject;
