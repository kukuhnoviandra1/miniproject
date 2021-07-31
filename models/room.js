'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.belongsToMany(models.User,{through: 'models.Book'})
    }
  };
  Room.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status : DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(room,option){
        room.status = "Available"
      }
    },
    sequelize,
    modelName: 'Room',
  });
  return Room;
};