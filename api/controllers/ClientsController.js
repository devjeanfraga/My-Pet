const database = require('../models')
const ClientDto = require('../DTO/ClientsDto')
const{ SerialClient} = require('../serial/Serializer')
const {ClientsServices} = require('../services')
const serializer = new SerialClient()



class ClientsController {

  static async create (req, res) {
    const {name, phone, email} = req.body

    const data = {
      name,
      phone,
      email,
    }
    console.log(data)

    try{ 

      const newClient = new ClientDto(data)
      await newClient.createClient()
      //serializer.filter()
      return res.status(201).json(newClient)

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

  static async show (req, res) {
    try {
     
    const clients = new ClientsServices()
    const allClients = await clients.pegueTodos() 
      return res.status(200).json(serializer.filter(allClients))

    }catch (err) {
      console.log(err)
    }
  }

  static async update (req, res) {
    const {clientId} = req.params
    const {name, phone, email} = req.body
    const data = {id: Number(clientId), name: name, phone: phone, email: email}
    try {

      const client = new ClientDto(data)
      await client.updateClient()
      

      return res.status(200).json(client)

    } catch (err) { console.log(err)}
  }

  static async remove (req, res) {
    const {clientId} = req.params

    try {
      const client = new ClientDto({id: Number(clientId)})
      await client.removeClient()
      return res.status(200).json({mesage: `cliente de id ${clientId} removido com sucesso`})
    } catch (err) {console.log(err)}
  }

  static async restore (req, res) {
    const {clientId} = req.params

    try {
      const client = new ClientDto({id: Number(clientId)})
      await client.recycleClient()

      return res.status(200).json(client)
    } catch (err) {console.log(err)}
  }

}

module.exports = ClientsController