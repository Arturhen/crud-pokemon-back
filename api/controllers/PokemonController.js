const database = require("../models/index");

class PokemonController {
  static async list(req, res) {
    try {
      const allPokemons = await database.Pokemons.findAll();
      return res.status(200).json(allPokemons);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async findAllOfTheSamePerson(req, res) {
    const parametros = req.params;
    try {
      const pokemons = await database.Pokemons.findAll({
        where: {
          nome_treinador: parametros.nomeTreinador.toString(),
        },
      });
      return res.status(200).json(pokemons);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  static async create(req, res) {
    const novoPokemon = req.body;
    try {
      const novoPokemonCriado = await database.Pokemons.create(novoPokemon);
      return res.status(200).json(novoPokemonCriado);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  static async update(req, res) {
    const parametros = req.params;
    const dadosCorrigidos = req.body;
    try {
      await database.Pokemons.update(dadosCorrigidos, {
        where: { id: parametros.id },
      });
      const pokemonCorrigido = await database.Pokemons.findOne({
        where: { id: parametros.id },
      });
      res.status(200).json(pokemonCorrigido);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  static async delete(req,res) {
    const parametros = req.params;
    try {
      await database.Pokemons.destroy({where:{id : parametros.id}})
      res.status(200).json({'Foi apagado o dado de ID':parametros.id})
    }
    catch(err){
      res.status(500).json(err.message)
    }
  }
}

module.exports = PokemonController;
