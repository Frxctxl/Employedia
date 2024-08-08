const { Pool } = require('pg');
const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5433,
  password: 'super',
  database: 'employee_db'
});

module.exports = client;
