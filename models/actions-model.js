const db = require('../data/dbConfig');

module.exports = {
  addAction,
  getActionById,
  getActionsByProject
};

function addAction(action) {
  db('actions')
    .insert(action)
    .then(newActionId => getActionById(newActionId));
}

function getActionById(id) {
  db('actions')
    .select()
    .where('id', id)
    .first();
}

function getActionsByProject(projectId) {
  db('actions')
    .select()
    .where('project_id', projectId);
}
