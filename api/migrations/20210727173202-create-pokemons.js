'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_treinador: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_pokemon: { //pensar em como colocar esses 3 campos em outra tabela com uma FK
        allowNull: false,
        type: Sequelize.INTEGER
      },
      data_captura: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      local_captura: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pokemons');
  }
};