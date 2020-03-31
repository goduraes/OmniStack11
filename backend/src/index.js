const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * caso queira que apenas uma aplicação acesse este backend
 * 
 * app.use(cors({
 * origin: 'http://meuapp.com.'
 * }));
 * 
 */

//qualquer aplicação pode acessar o backend
app.use(cors());

//função converte os retornos json em algo entendivel pela aplicação
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * rota / recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?"
  * servem para filtros, paginação
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * exemplo: /:id
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB . . .
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
