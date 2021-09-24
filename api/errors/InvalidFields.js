class InvalidFields extends Error {
  constructor (fieldName) {
    const message = ` O campo ${fieldName} está inválido`
    super(message)
    this.name = 'campo inválido'
    this.id = 0 
  }
}

module.exports = InvalidFields
