const db = require('../models')
const Services = require('./Services')
//const PetsServices = require('./PetsServices')

class SexesServices extends Services {
  constructor () {
    super('Sexes')
    
  }

  async econtreOuCrie (field =  {}, transacao = {} ) {
 
    return await db[this.model].findOrCreate({ where: field } )
    
    
  }
  
}

module.exports = SexesServices