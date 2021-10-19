const ClientsServices = require('../services/Services')
const dbClients = new ClientsServices('Clients')
const db =  require('../models')
class ClientDto {
  constructor ({id = Number(), name = String() , phone = String(), email = String() , createdAt = '', updatedAt = ''}) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    //this.pets = {}
    //this.image = {}
    
  }



  async createClient () {
    const client = await dbClients.crie({ 
      name: this.name,
      phone: this.phone,
      email: this.email
    })
    this.id = client.id
    this.createdAt = client.createdAt
    this.updatedAt = client.updatedAt  
   
  }

  async findIndex () { 
    const client =  await dbClients.peguePorPk(this.id, {include: 'pets'})
    this.id =  client.id
    this.name = client.name
    this.phone =  client.phone
    this.email = client.email
    this.createdAt = client.createdAt
    this.updatedAt = client.updatedAt
    this.pets = client.pets.map( pet => {return {id: pet.id,  name: pet.name, breed: pet.breed}})
     
  }

  async updateClient () {
    const client = await dbClients.peguePorPk(this.id)

    if(!client){
      throw new Error('Cliente não encontrado')
    }

    const data = {
    name:this.name,
    phone: this.phone,
    email:this.email
    }
      return db.sequelize.transaction(async transacao =>{
        await dbClients.atualizeRegistros(data, {id: this.id}, {transaction: transacao})
        await this.findIndex()
      })  
  }

  async removeClient () {
  return db.sequelize.transaction(async transacao => {
    await dbClients.apagarRegistro({where: {id: this.id}}, {transaction: transacao})
  })
  }

  async recycleClient () {
     return db.sequelize.transaction(async transacao => {
      await dbClients.restaurarResgistro( {id:this.id}, {transaction: transacao})
      await this.findIndex()
     })
    
  }

}

module.exports = ClientDto