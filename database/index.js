const knex = require('knex')(process.env.NODE_ENV !== 'production' ? {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'todo_db'
    }
  } : {
    client: 'pg', connection: process.env.DATABASE_URL, searchPath: ['public']
  }
);


module.exports = knex;