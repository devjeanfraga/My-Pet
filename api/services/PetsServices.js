const db = require('../models')
const Services = require('./Services')
const ImagesServices = require('./ImagesServices')
const SexesServices = require('./SexesServices')

class PetsServices extends Services {
  constructor () {
    super('Pets')
    this.images = new ImagesServices('Images')
    this.sexes = new SexesServices('Sexes')
  }

  async  criePet (formPet, formSex, formImages) {
   return db.sequelize.trasaction( trasaction => {
    super.crie(formPet, {trasaction: trasaction})
    await this.sexes.econtreOuCrie(formSex , trasaction)
    await this.images.crie(formImages, {trasaction: trasaction}) 
  })
  }

}

module.exports = PetsServices