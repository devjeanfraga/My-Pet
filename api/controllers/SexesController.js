const SexesServices = require('../services/Services')
//const db = require('../models')

class SexesController {
  static async create (req, res) {
   const data = req.body

    try {
       //const newGender = await db.Sexes.create(data)
      const sexes = new SexesServices('Sexes')
      const newGender = await sexes.crie(data)
      return res.status(201).json(newGender)
    } catch (err) {
        console.log(err)
    }
  }
}

module.exports = SexesController  