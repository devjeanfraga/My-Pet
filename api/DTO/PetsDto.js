const db = require('../models')
const PetsServices = require('../services/Services')
const SexesServices = require('../services/SexesServices')
const ImagesServices = require('../services/ImagesServices')
const dbPet = new PetsServices('Pets')
const  dbSex = new SexesServices('Sexes')
const dbImages = new ImagesServices('Images')

class PetsDto {
  constructor ({id , name , age , breed , weight , client_id , gender ,  images=[]  } ) {
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

    /** ENCONTRAR OU CRIAR **/
    const [boos] = await dbSex.econtreOuCrie({gender:this.gender})
    await pet.addSex(boos)

    /** CRIAÇÃO DE IMAGENS **/
    const files = this.images.map(image =>{return {path: image.filename, pet_id: pet.id }})
    const pictures = await dbImages.crieImagens(files)
    this.images = pictures.map(image => { return { 
      idFile: image.id,
      idPet: image.pet_id,
      NameFile: `http://localhost:3838/uploads/${image.path}`,
      createdAtFile:  image.createdAt,
      updatedAtFile:  image.updatedAt    
    }})

  }

  async findIndex () {
    const pet = await dbPet.peguePorPk(this.id, {include:['sexes','pet' ]})
    return {
      owner_id: this.client_id = pet.client_id,
      id: pet.id,
      name: this.name = pet.name,
      age: this.age = pet.age,
      breed: this.breed = pet.breed,
      weight: this.weight = pet.weight,
      gender: this.gender = pet.sexes.map( i => {return {sex: this.gender = i.gender}}),
      images: this.images = pet.pet.map(image => {return  {id: image.id, path: `http://localhost:3838/uploads/${image.path}`}})
    }
  }

  async updatePet () {
    await dbPet.peguePorPk(this.id, {include:['sexes','pet' ]})

    const fields = ['name', 'age', 'breed', 'wieght', 'gender', 'images']
    const updateFields = {}
    fields.forEach( field => {
      
    })

  }
}


module.exports = PetsDto