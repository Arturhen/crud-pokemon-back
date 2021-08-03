"use strict";


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Pokemons",
      [
        {
          nome_treinador: "brodin",
          id_pokemon: 12,
          data_captura: new Date(15 / 10 / 1891),
          local_captura: "jonas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_treinador: "brodin",
          id_pokemon: 12,
          data_captura: new Date(),
          local_captura: "jonas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_treinador: "brodin",
          id_pokemon: 12,
          data_captura: new Date(),
          local_captura: "jonas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_treinador: "brodin",
          id_pokemon: 12,
          data_captura: new Date('2016-06-21T16:00:00.000Z'),
          local_captura: "jonas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    Example: await queryInterface.bulkDelete("Pokemons", null, {});
  },
};
