const { Router } = require('express')
const PeopleControllers = require('../controllers/PeopleControllers')
//const PetsControllers = require('../controllers/PetsControllers')
const router = Router()

router.post('/people', PeopleControllers.createPeople)
router.get('/people', PeopleControllers.getAllPeople)
router.get('/people/:peopleId', PeopleControllers.getOnePeople)
router.put('/people/:peopleId',PeopleControllers.resetPeople)
router.delete('/people/:peopleId', PeopleControllers.removePerson)

module.exports = router