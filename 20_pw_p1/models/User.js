const { DataTypes } = require("sequelize");

const usersModel = (sequelize) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pw: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    userid: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  });
  return Users;
};

module.exports = usersModel;
