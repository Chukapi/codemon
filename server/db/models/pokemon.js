const Sequelize = require('sequelize');
const db = require('../db');

const Pokemon = db.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  exp: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  evolutionLevel: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 3
    }
  },
  rare: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
});

module.exports = Pokemon;