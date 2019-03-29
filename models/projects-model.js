const db = require('../data/dbConfig');

const actionsDB = require('./actions-model');

module.exports = {
  addProject,
  getProjectById,
  getProjectWithActions
};

function addProject(project) {
  db('projects')
    .insert(project)
    .then(newProjectId => getProjectById(newProjectId));
}

function getProjectById(id) {
  return db('projects')
    .select()
    .where('id', id)
    .first();
}

function getProjectWithActions(id) {
  const project = getProjectById(id);
  if (project) {
    return { ...project, actions: actionsDB.getActionsByProject(id) };
  } else {
    return null;
  }
}
