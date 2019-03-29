const db = require('../data/dbConfig');

const actionsDB = require('./actions-model');

module.exports = {
  addProject,
  getProjectById,
  getProjectWithActions
};

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(newProjectId => getProjectById(newProjectId[0]));
}

function getProjectById(id) {
  return db('projects')
    .select()
    .where('id', id)
    .first()
    .then(project => actionsDB.toBoolean(project));
}

async function getProjectWithActions(id) {
  try {
    const project = await getProjectById(id);
    if (project) {
      const actions = await actionsDB.getActionsByProject(id);
      return { ...project, actions: actions };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}
