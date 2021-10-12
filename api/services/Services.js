const db = require('../models')

class Services {

  constructor(model) {
    this.model = model
  }



  async crie (data, transacao = {}  ) {
    return await db[this.model].create(data, transacao)
  }

  async pegueTodos (where = {}, transacao = {}) {
    return db[this.model].findAll({where: {...where}, raw: true}, {transaction: transacao})
    
  }
  
  async peguePorPk (id, include = {}, transacao = {}){
    return db[this.model].findByPk(id, include, {transaction: transacao})
   }
  
  async atualizeRegistros (infosASeremAtualizadas, where, transacao = {}) {
    return db[this.model].update(infosASeremAtualizadas, {where: {...where}}, {transaction: transacao})
  }
}


  

module.exports = Services