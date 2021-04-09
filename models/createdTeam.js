const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {} 

   Player.init (
     {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    highWar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    lowWar: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
     }),
    

  module.exports = player;

  connection.sync();