const inquirer = require('inquirer');
const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'super',
  database: 'employee_db'
});
