const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();


const sequelize = new Sequelize(process.env.POSTGRES) // Example for postgres


async function Connection(){
    try {
        await sequelize.authenticate();
        console.log('Conexão Foi Efetuada com Sucesso');
      } catch (error) {
        console.error('Erro ao se conectar:', error);
      }
}

Connection()

module.exports= sequelize