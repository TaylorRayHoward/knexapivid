console.log(process.env.DATABASE_URL);
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

knex.raw('SELECT tablename FROM pg_tables WHERE schemaname=\'public\'').then(data => {
  console.log(data);
});


module.exports = knex;