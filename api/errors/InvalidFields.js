class InvalidFields extends Error {
  constructor (fieldName) {
    const message = ` O campo ${fieldName} está inválido`
    super(message)
    this.name = 'campo inválido'
    this.idErr = 1
  }
}

module.exports = InvalidFields
