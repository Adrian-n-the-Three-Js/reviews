const { Client } = require('pg');

const db = new Client({
  user: process.env.POSTGRES_USER,
  // user: 'postgres',
  // host: 'ec2-18-144-155-248.us-west-1.compute.amazonaws.com',
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

db.connect();

// db.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   db.end()
// })

module.exports = db;
