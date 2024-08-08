const inquirer = require('inquirer');
const client = require('./db/connection');

async function init() {
  await client.connect();

  console.log('connected');
}

init();
