const knex = require('knex');

//importa as configurações do arquivo knexfile
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//passa a config de dev como parametro
const connection = knex(config);

module.exports = connection;