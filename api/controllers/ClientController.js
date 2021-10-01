const database = require('../models')

class ClientsController {
  static async create (req, res) {
    const {
      name,
      phone, 
      email} = req.body

    try{
      const data = {
        name, 
        phone, 
        email
      }
      
      const newClient = await database.Clients.create(data)
      return res.status(201).json(newClient)
    }catch(err) {
      console.log(err)
    }
  }

  static async index (req, res) {
    const {client_id} = req.params
    try{
      const client = await database.Clients.findByPk(client_id, {include: 'client'})
      return res.status(200).json(client)
    }catch(err){
      console.log(err)
    }
  }

}

module.exports =ClientsController