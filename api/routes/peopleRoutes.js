const { Router } = require('express')
const PeopleControllers = require('../controllers/PeopleControllers')
const router = Router()

router.post('/people', PeopleControllers.createData)
router.get('/people', PeopleControllers.getAlldata)
router.get('/people/:peopleId', PeopleControllers.getOneData)
router.put('/people/:peopleId',PeopleControllers.resetData)
router.delete('/people/:peopleId', PeopleControllers.remove)

module.exports = router