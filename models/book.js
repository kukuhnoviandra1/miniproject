'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User)
      Book.belongsTo(models.Room)
    }S
  };
  Book.init({
    dateIn: DataTypes.DATE,
    dateOut: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};