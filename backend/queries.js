const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "projectgov",
  password: "mypassword",
  port: 5432,
});

const getProjects = (request, response) => {
  pool.query("SELECT * FROM project ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProjectById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM project WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createProject = (request, response) => {
  const { name, email } = request.body;

  pool.query(
    "INSERT INTO project (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Project added with ID: ${results.insertId}`);
    }
  );
};

const updateProject = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE project SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Project modified with ID: ${id}`);
    }
  );
};

const deleteProject = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM project WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Project deleted with ID: ${id}`);
  });
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
