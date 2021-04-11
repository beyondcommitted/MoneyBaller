const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {} 

   Team.init (
     {
    fielder: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pitcher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hitter: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // value: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // }
     }),
    

  module.exports = Team;

  connection.sync();