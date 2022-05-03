'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(30),
      validate: {
        len: [4, 30]
      }
    }
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};