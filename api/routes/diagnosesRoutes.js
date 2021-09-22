const {Router} = require('express')
const router = Router()
const DiagnosesControllers = require('../controllers/DiagnosesControllers')

router.post('/people/:peopleId/pets/:petsId/diagnostic', DiagnosesControllers.createDiagnoses)
router.get('/diagnoses', DiagnosesControllers.getAllDiagnoses)
router.get('/pets/:petsId/diagnoses', DiagnosesControllers.getDianosesByPet)

module.exports = router