'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Room,{through: 'models.Book'})
    }
  };
  User.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          message : "Form Tidak Boleh Kosong !!"
        }
      }
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};