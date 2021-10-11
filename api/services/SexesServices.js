const db = require('../models')
const Services = require('./Services')

class SexesServices extends Services {
  constructor () {
    super('Sexes')
 
  }

  async econtreOuCrie (field) {
  return db.sequelize.transaction( t => {
    const [boos] = await db[this.model].findOrCreate({ where: { gender: field} }, {transation: t })
    await pet.addSex(boos)
  })   
  }
  
}

module.exports = SexesServices