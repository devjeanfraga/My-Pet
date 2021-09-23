const {Router} = require('express')
const router = Router()
const DiagnosesControllers = require('../controllers/DiagnosesControllers')

router.post('/people/:peopleId/pets/:petsId/diagnoses', DiagnosesControllers.createDiagnoses)
router.get('/diagnoses', DiagnosesControllers.getAllDiagnoses)
router.get('/pets/:petsId/diagnoses', DiagnosesControllers.getDianosesByPet)
router.get('/pets/:petsId/diagnoses/:diagnosesId', DiagnosesControllers.getOneDiagnostic)
router.delete('/pets/:petsId/diagnoses/:diagnosesId',DiagnosesControllers.removeDiagnostic)
router.put('/pets/:petsId/diagnoses/:diagnosesId',DiagnosesControllers.resetDiagnosctic)
module.exports = router