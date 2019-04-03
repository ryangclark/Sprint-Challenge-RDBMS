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
    .then(newActionId => getActionById(newActionId[0]));
}

function getActionById(id) {
  return db('actions')
    .select('id', 'name', 'description', 'notes', 'complete')
    .where('id', id)
    .first()
    .then(action => toBoolean(action));
}

function getActionsByProject(projectId) {
  return db('actions')
    .select('id', 'name', 'description', 'notes', 'complete')
    .where('project_id', projectId)
    .then(array => array.map(item => toBoolean(item)));
}

function toBoolean(item) {
  return {
    ...item,
    complete: item.complete ? true : false
  };
}
