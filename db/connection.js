const { Pool } = require('pg');
const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'super',
  database: 'employee_db'
});

module.exports = client;
