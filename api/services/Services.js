const database = require('../models/index')

class Services {
  constructor (modelName) {
    this.modelName= modelName
  }

  async criar (infosDeEntrada) {
    return database[this.modelName].create(infosDeEntrada)
    //SELECT `id`, `name`, `phone`, `email`, `active`, `appointment`, `createdAt`, `updatedAt` FROM `People` AS `People`;
    //INSERT INTO `People` (`id`,`name`,`phone`,`email`,`active`,`appointment`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?,?,?); 
  }

  async pegarTodos () {
    return database[this.modelName].findAll()
    // SELECT `id`, `name`, `phone`, `email`, `active`, `appointment`, `createdAt`, `updatedAt` FROM `People` AS `People`;
  }

  async pegarUm (id) {
    return database[this.modelName].findOne({where: { id: id}})
    //SELECT `id`, `name`, `phone`, `email`, `active`, `appointment`, `createdAt`, `updatedAt` FROM `People` AS `People` WHERE `People`.`id` = 1;
  }

  async atualizarRegistro (infosASeremAtualizadas, id, transacao = {}) {
    return database[this.modelName].update(infosASeremAtualizadas, {where: {id: id}}, {transaction: transacao})
    //UPDATE `People` SET `name`=?,`updatedAt`=? WHERE `id` = ?
    //SELECT `id`, `name`, `phone`, `email`, `active`, `appointment`, `createdAt`, `updatedAt` FROM `People` AS `People` WHERE `People`.`id
  } 

  async atualizarRegistros (infosASeremAtualizadas, where, transacao = {}) {
    return database[this.modelName].update(infosASeremAtualizadas, {where: {...where}}, {transaction: transacao})
  }

  async deletar (id) {
    return database[this.modelName].destroy({where: {id: id}})
  // DELETE FROM `People` WHERE `id` = 16
  // SELECT `id`, `name`, `phone`, `email`, `active`, `appointment`, `createdAt`, `updatedAt` FROM `People` AS `People`;
  }
}


module.exports =  Services