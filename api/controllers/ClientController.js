const database = require('../models')
const ClientDto = require('../DTO/ClientsDto')
const{ SerialClient} = require('../serial/Serializer')
const serializer = new SerialClient()



class ClientsController {

  static async create (req, res) {
    const {name, phone, email} = req.body

    const data = {
      name,
      phone,
      email,
    }

    try{ 

      const newClient = new ClientDto(data)
      await newClient.createClient()
      return res.status(201).json(serializer.filter(newClient))

    }catch(err) {
      console.log(err)
    }
  }

  static async index (req, res) {
    const {clientId} = req.params
    try{
      const client =  new ClientDto({id:Number(clientId)})
      await client.findIndex()
      return res.status(200).json(client)
    }catch(err){
      console.log(err)
    }
  }

}

module.exports = ClientsController