const ClientsServices = require('../services/Services')
const db = new ClientsServices('Clients')
class ClientDto {
  constructor ({id = 0, name = '', phone = '', email = '', createdAt = '', updatedAt = ''}) {
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
    const client = await db.crie({ 
      name: this.name,
      phone: this.phone,
      email: this.email
    })
    this.id = client.id
    this.createdAt = client.createdAt
    this.updatedAt = client.updatedAt  
   
  }

  async findIndex () { 
    const client =  await db.peguePorPk(this.id, {include:  'client'})
    this.id =  client.id
    this.name = client.name
    this.phone =  client.phone
    this.email = client.email
    this.createdAt = client.createdAt
    this.updatedAt = client.updatedAt
    this.pets = client.client.map( pet => {return {id: pet.id,  name: pet.name, breed: pet.breed}})
    
  }

}

module.exports = ClientDto