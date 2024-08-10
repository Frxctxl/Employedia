const inquirer = require('inquirer');
const client = require('../db/connection');

module.exports = {
  async getDept() {
    const data = await client.query('SELECT * FROM departments');

    return data.rows;
  },

  async addDept() {
    const answerObj = await inquirer.prompt({
      name: 'name',
      message: 'What is the name of the Department'
    })



    const sql = 'INSERT INTO departments (dept_name) VALUES ($1)'

    await client.query(sql, [answerObj.name]);
  }
}
