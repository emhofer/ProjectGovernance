const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./queries");
const port = 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/projects", db.getProjects);
app.get("/projects/:id", db.getProjectById);
app.post("/projects", db.createProject);
app.put("/projects/:id", db.updateProject);
// app.delete("/projects/:id", db.deleteProject);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
