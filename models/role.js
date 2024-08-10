const client = require('../db/connection');
const inquirer = require('inquirer');

module.exports = {
  async getRole() {
    const data = await client.query('SELECT * FROM roles');

    return data.rows;
  },

  async addRole() {
    const { rows: departments } = await client.query('SELECT * FROM departments');
    const answerObj = await inquirer.prompt([
      {
        name: 'title',
        message: 'Please enter a Title'
      },
      {
        name: 'salary',
        message: 'Please enter a Salary'
      },
      {
        name: 'dept_id',
        message: 'What Department does this Role belong too',
        type: 'list',
        choices: departments.map(dept => {
          return {
            name: dept.dept_name,
            value: dept.id
          }
        })
      }
    ])

    await client.query('INSERT INTO roles (title, salary, dept_id) VALUES ($1, $2, $3)', Object.values(answerObj))
  }
}

