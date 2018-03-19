const Sequelize = require('sequelize');
const db = require('../db');

const Fight = db.define('fight', {
  winnerId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  loserId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  problemsIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: []
  }
});

module.exports = Fight;