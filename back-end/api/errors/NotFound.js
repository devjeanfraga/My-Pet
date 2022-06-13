class NotFound extends Error {
  constructor (name) {
    const message = ` ${name} não encontrado`
    super(message)
    this.name = 'Não encontrado'
    this.idErr = 0 
  }
}

module.exports = NotFound

//falta implementar 