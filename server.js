const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet);
server.use(express.json());

function handleServerError(error) {
  console.error(error);
  return res
    .status(500)
    .json({ message: 'The request could not be completed.', error: error });
}

// POST /api/projects
// Adds a project.
server.post('/api/projects', (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ message: 'Please include a `name` property.' });
  }
  db.addProject(req.body)
    .then(newProject => res.status(201).json(newProject))
    .catch(error => handleServerError(error));
});

// POST /api/actions
// Adds an action to a project.
server.post('/api/actions', (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ message: 'Please include `project_id` and `name` properties.' });
  }
  if (!db.getProjectById(req.body.project_id)) {
    return res
      .status(404)
      .json({ message: `No project found with ID ${req.body.project_id}` });
  }
  db.addAction(req.body)
    .then(updatedProject => res.status(201).json(updatedProject))
    .catch(error => handleServerError(error));
});

// GET /api/project/:id
// Return the project for a given `id`
server.get('/api/project/:id', (req, res) => {
  db.getProjectById(req.params.id)
    .then(project => {
      if (!project) {
        return res
          .status(404)
          .json({ message: `No project found with ID ${req.params.id}` });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(error => handleServerError(error));
});

module.exports = server;
