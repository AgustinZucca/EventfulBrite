'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {model: "Categories"}
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    capacity: {type: DataTypes.NUMERIC}
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.User, {foreignKey: 'hostId'});
    Event.belongsTo(models.Category, {foreignKey: 'categoryId'});
    Event.hasMany(models.Ticket, {foreignKey: 'eventId'});
  };
  return Event;
};