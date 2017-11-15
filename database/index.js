const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'todo_db'
  }
});

module.exports = knex;