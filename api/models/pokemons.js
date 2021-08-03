'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pokemons.init({
    nome_treinador: DataTypes.STRING,
    id_pokemon: DataTypes.INTEGER,
    data_captura: DataTypes.DATEONLY,
    local_captura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemons',
  });
  return Pokemons;
};