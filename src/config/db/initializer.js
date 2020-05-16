const Sequelize = require('sequelize');

//criar nomes para estes parametros, talvez um arquivo de configuracao

const sequelize = new Sequelize('commentsuniverse', 'abcd', 'abcd', {
  host: process.env.HOST_DATABASE,
  dialect: 'mysql'
});

//exportar como db
export {sequelize, Sequelize};
