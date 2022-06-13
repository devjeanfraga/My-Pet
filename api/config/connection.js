const Sequelize = require('sequelize').Sequelize; 

const localConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,

  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

const RemoteConnection =  new Sequelize(process.env.JAWSDB_URL);


process.env.JAWSDB_URL ? RemoteConnection : localConnection; 

