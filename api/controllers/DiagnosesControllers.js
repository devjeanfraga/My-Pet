const {DiagnosesServices} = require('../services')
const diagnosesServices = new DiagnosesServices('Diagnoses')

// /people/:peopleId/pets/:petsId/diagnostic
class DiagnosesControllers {
  static async  createDiagnoses (req, res) {
    const  { peopleId, petsId }  = req.params
    const infoBody = {...req.body, ownerPet_ID : Number(peopleId)}
    try {
      const newDiagnostic = await diagnosesServices.criar(infoBody)
      return res.status(201).json(newDiagnostic)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async getAllDiagnoses (req, res) {
    try {
      const allDiagnoses = await diagnosesServices.pegarTodos()
      return res.status(201).json(allDiagnoses)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

}

module.exports = DiagnosesControllers
