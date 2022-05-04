"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          hostId: 1,
          categoryId: 1,
          name: "Zydeco Fest",
          description: `The Biggest Zydeco Festival in Texas About this event
        WELCOME TO THE HOME OF THE 2022 HOUSTON ZYDECO FEST
        GET READY TO ATTEND THE BEST ZYDECO FESTIVAL IN THE STATE OF TEXAS. A DAY OF DANCING, EATING AND PARTYING HAS BEEN PLANNED FOR YOU AND YOURS. COME SPEND YOUR DAY WITH THE BEST ZYDECO BANDS IN THE NATION. OUR STAGE WILL BE ROCKING ALL DAY AND YOU WILL BE ON YOUR FEET NON-STOP. MAKE SURE YOU PURCHASE YOUR TICKETS IN ADVANCE AND PREPARE TO HAVE THE TIME OF YOUR LIFE!!!
        FOR VENDOR OPPORTUNITIES EMAIL US AT HOUSTONZYDECOFEST@GMAIL.COM
        
            2022 Houston Zydeco Fest image
        INFORMATION
        Q: Is Seating Available
        A: Yes there is a good amount of places to sit. You may also bring a folding chair or blanket. Tents and coolers are not allowed
        Q: Is there parking available
        A: There is parking in nearby areas. We suggest you carpool and Uber/Lyft to make it less of a hastle for you.
        Q: Are Kids Free
        A: Kids 8 and Under are free
        `,
        img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F269221309%2F198187202752%2F1%2Foriginal.20220419-162526?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C631%2C1500%2C750&s=5b855b1925f35ece1de3f4078d7861f8',
        date: '2022-05-13 15:45:00-05',
        location: 'Houston, Texas',
        capacity: 500,
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
    return queryInterface.bulkDelete("Events", null, {});
  },
};
