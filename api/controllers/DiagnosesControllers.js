const {DiagnosesServices} = require('../services')
const diagnosesServices = new DiagnosesServices('Diagnoses')

// /people/:peopleId/pets/:petsId/diagnostic
class DiagnosesControllers {
  static async  createDiagnoses (req, res) {
    const  { peopleId, petsId }  = req.params
    const infoBody = {...req.body, FK_People_Diagnoses : Number(peopleId), FK_Pets_Diagnoses: Number(petsId)}
    try {
      const newDiagnostic = await diagnosesServices.criar(infoBody)
      return res.status(201).json(newDiagnostic)
    }catch (err) {
      console.log(err.message)
      return res.status(500).json(err.message)
    }
  }

  static async getDianosesByPet(req, res) {
    const {petsId} = req.params
    try {
      const allDiagnoses = await diagnosesServices.econtrarEContar({FK_Pets_Diagnoses: Number(petsId)}, {limit: 20})
      return res.status(200).json(allDiagnoses)
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
