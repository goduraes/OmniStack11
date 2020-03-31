const knex = require('knex');

//importa as configurações do arquivo knexfile
const configuration = require('../../knexfile');

//passa a config de dev como parametro
const connection = knex(configuration.development);

module.exports = connection;