const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const carsList = [];

    for (let i = 0; i < 20; i += 1) {
      carsList.push({
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('cars', carsList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('cars', null, {});
  },
};
