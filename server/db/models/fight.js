const Sequelize = require('sequelize');
const db = require('../db');

const Fight = db.define('fight', {
  winnerId: {
    type: Sequelize.INTEGER,
  },
  problemsIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue: []
  },
  challengerSocket: {
    type: Sequelize.STRING,
  },
  opponentSocket: {
    type: Sequelize.STRING
  },
  challengerPokemonId: {
    type: Sequelize.INTEGER
  },
  opponentPokemonId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Fight;