const db = require('../data/dbConfig');

module.exports = {
  addAction,
  getActionById,
  getActionsByProject,
  toBoolean
};

function addAction(action) {
  return db('actions')
    .insert(action)
    .then(newActionId => getActionById(newActionId));
}

function getActionById(id) {
  return db('actions')
    .select()
    .where('id', id)
    .first()
    .then(action => toBoolean(action));
}

function getActionsByProject(projectId) {
  return db('actions')
    .select()
    .where('project_id', projectId)
    .then(array => array.map(item => toBoolean(item)));
}

function toBoolean(item) {
  return {
    ...item,
    completed: item.complete ? true : false
  };
}
