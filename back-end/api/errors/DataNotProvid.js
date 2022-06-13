class DataNotProvided extends Error {
  constructor () {
      const message = 'Dados insuficientes para completar a operação'
      super(message)
      this.name = 'Dados não fornecidos'
      this.idErr = 2 
  }
}

module.exports = DataNotProvided