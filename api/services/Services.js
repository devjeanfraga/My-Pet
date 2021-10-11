const db = require('../models')

class Services {

  constructor(model) {
    this.model = model
  }

  async crie (data ={} , transacao = {trasaction: transacao}  ) {
    return await db[this.model].create(data)
  }

  async pegueTodos (where = {}, transacao = {}) {
    return db[this.model].findAll({where: {...where}, raw: true}, {trasaction: transacao})
    
  }
  
  async peguePorPk (id, include = {}, transacao = {}){
    return db[this.model].findByPk(id, include, {trasaction: transacao})
   }
  
  async atualizeRegistros (infosASeremAtualizadas, where, transacao = {}) {
    return db[this.model].update(infosASeremAtualizadas, {where: {...where}}, {transaction: transacao})
  }
}


  

module.exports = Services