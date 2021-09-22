const {Router} =  require('express')
const PetsControllers = require('../controllers/PetsControllers')

const router = Router()

router.post('/people/:peopleId/pets', PetsControllers.createPet)
router.get('/people/:peopleId/pets', PetsControllers.getPetsByOwner)
router.get('/pets', PetsControllers.getAllPets) 
router.put('/people/:peopleId/pets/:petsId', PetsControllers.resetPet)
router.delete('/pets/:petsId', PetsControllers.removePet)

module.exports = router 
