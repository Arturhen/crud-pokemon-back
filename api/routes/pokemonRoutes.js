const {Router} = require('express')
const PokemonController = require('../controllers/PokemonController')

const router = Router()

router.get('/pokemons',PokemonController.list)
router.get('/pokemons/:nomeTreinador',PokemonController.findAllOfTheSamePerson)
router.post('/pokemons',PokemonController.create)
router.put('/pokemons/:id',PokemonController.update)
router.delete('/pokemons/:id',PokemonController.delete)

module.exports = router