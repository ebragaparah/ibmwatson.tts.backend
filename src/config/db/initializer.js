const Sequelize = require('sequelize');

//criar nomes para estes parametros, talvez um arquivo de configuracao

const sequelize = new Sequelize('commentsuniverse', 'abcd', 'abcd', {
  host: '172.18.0.2',
  dialect: 'mysql'
});

export {sequelize, Sequelize};
//exportar como db
