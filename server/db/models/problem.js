const Sequelize = require('sequelize');
const db = require('../db');

const Problem = db.define('problem', {
  category: {
    type: Sequelize.STRING
  },
  difficulty: {
    type: Sequelize.ENUM('easy', 'medium', 'hard'),
    defaultValue: 'medium'
  },
  experience: {
    type: Sequelize.INTEGER,
    defaultValue: 25
  },
  prompt: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  params: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  tests: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
});

module.exports = Problem;
