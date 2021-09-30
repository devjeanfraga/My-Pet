const { Router } = require('express')
const PeopleControllers = require('../controllers/PeopleControllers')
//const PetsControllers = require('../controllers/PetsControllers')
const router = Router()

router.post('/people', PeopleControllers.createPerson)
router.get('/people', PeopleControllers.getAllPeople)
router.get('/people/:peopleId', PeopleControllers.getPerson)
router.put('/people/:peopleId',PeopleControllers.resetPerson)
router.delete('/people/:peopleId', PeopleControllers.removePerson)

module.exports = router