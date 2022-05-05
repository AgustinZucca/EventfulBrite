'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Events'}
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'Users'}
    }
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    
  };
  return Ticket;
};