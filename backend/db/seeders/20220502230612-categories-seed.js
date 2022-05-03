"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Appearance or Singing",
        },
        {
          name: "Attraction",
        },
        {
          name: "Camp, Trip, or Retreat",
        },
        {
          name: "Class, Training or Workshop",
        },
        {
          name: "Concert or Performance",
        },
        {
          name: "Conference",
        },
        {
          name: "Convention",
        },
        {
          name: "Dinner or Gala",
        },
        {
          name: "Festival or Fair",
        },
        {
          name: "Game or Competition",
        },
        {
          name: "Meeting or Networking Event",
        },
        {
          name: "Other",
        },
        {
          name: "Party or Social Gathering",
        },
        {
          name: "Race or Endurance Event",
        },
        {
          name: "Rally",
        },
        {
          name: "Screening",
        },
        {
          name: "Seminar or Talk",
        },
        {
          name: "Tour",
        },
        {
          name: "Tournament",
        },
        {
          name: "Tradeshow, Consumer Show, or Expo",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
