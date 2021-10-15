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
    const [genderOfTheAnimal] = await dbSex.econtreOuCrie({gender:this.gender})
    await pet.addGender(genderOfTheAnimal)

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
    const pet = await dbPet.peguePorPk(this.id, {include: ['gender','pictures']})
    return {
      owner_id: this.client_id = pet.client_id,
      id: pet.id,
      name: this.name = pet.name,
      age: this.age = pet.age,
      breed: this.breed = pet.breed,
      weight: this.weight = pet.weight,
      gender: this.gender = pet.gender.map( i => {return {sex: this.gender = i.gender}}),
      images: this.images = pet.pictures.map(image => {return  {id: image.id, path: `http://localhost:3838/uploads/${image.path}`}})
    }
  }

  async updatePet () {
    const updatePet = { name: this.name, age: this.age, breed: this.breed, weight: this.weight } 
    
    this.gender 

    return db.sequelize.transaction(async transacao =>{
      const pet = await dbPet.peguePorPk(this.id, {transaction: transacao} )

      await pet.atualizeRegistros(updatePet, {id: this.id, client_id: this.client_id },  transacao )

      await pet.setGender(this.gender)
      
      this.images.map( async (image) =>{
      const img = {path: image.filename, pet_id: pet.id } //id: 1
      await  dbImages.atualizeRegistros( img, {id}, {transaction: transacao} )
      })
    })  //Final da transaction
    
  }
}

//dbSex.atualizeRegistros(this.gender, {})

module.exports = PetsDto