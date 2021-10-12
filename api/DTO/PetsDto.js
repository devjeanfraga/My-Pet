const db = require('../models')
const PetsServices = require('../services/Services')
const SexesServices = require('../services/SexesServices')
const dbPet = new PetsServices('Pets')
const  dbSex = new SexesServices('Sexes')

class PetsDto {
  constructor ({id , name , age , breed , weight , client_id , gender ,  images  } ) {
    this.id = id
    this.name = name
    this.age = age
    this.breed = breed
    this.weight = weight
    this.client_id = Number(client_id) 
    this.gender = gender
    this.images = images
  }

  async createPet () {
    const pet =  await  dbPet.crie({
      name: this.name,
      age: this.age,
      breed: this.breed,
      weight: this.weight, 
      client_id: this.client_id 
    })
    this.id = pet.id
    this.client_id = pet.client_id 
    this.createdAt = pet.createdAt
    this.updatedAt = pet.updatedAt


      const [boos] = await dbSex.econtreOuCrie({gender:this.gender})
      await pet.addSex(boos)

      
  }

  

}

module.exports = PetsDto