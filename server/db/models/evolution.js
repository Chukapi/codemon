const Sequelize = require('sequelize');
const db = require('../db');

const Evolution = db.define('evolution', {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  stage: {
    type: Sequelize.ENUM('1', '2', '3')
  },
  next: {
    type: Sequelize.STRING
  },
  previous: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  rare: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
})

module.exports = Evolution;
