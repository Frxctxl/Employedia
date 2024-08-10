const inquirer = require('inquirer');
const client = require('../db/connection');
const role = require('./role');

module.exports = {
  async getEmployee() {
    const data = await client.query('SELECT * FROM employees');

    return data.rows;
  },

  async addEmployee() {
    const { rows: roles } = await client.query('SELECT * FROM roles');
    const roleIDs = roles.map(role => {
      return {
        name: role.title,
        value: role.id
      }
    })

    const { rows: employees } = await client.query('SELECT * FROM employees');
    const managers = employees.map(emp => {
      return {
        name: emp.first_name.concat(' ', emp.last_name),
        value: emp.id
      }
    })

    const answerObj = await inquirer.prompt([
      {
        name: 'first_name',
        message: 'Please enter a first name'
      },
      {
        name: 'last_name',
        message: 'Please enter a last name'
      },
      {
        name: 'role_id',
        message: 'What Role does this Employee belong too',
        type: 'list',
        choices: roleIDs
      },
      {
        name: 'manager_id',
        message: 'Who is this employees manager?',
        type: 'list',
        choices: managers
      }
    ])
    await client.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', Object.values(answerObj))
  },

  async updateRole() {
    const { rows: roles } = await client.query('SELECT * FROM roles');
    const roleIDs = roles.map(role => {
      return {
        name: role.title,
        value: role.id
      }
    })

    const { rows: employees } = await client.query('SELECT * FROM employees');
    const empIDs = employees.map(emp => {
      return {
        name: emp.first_name.concat(' ', emp.last_name),
        value: emp.id
      }
    })

    const answerObj = await inquirer.prompt([
      {
        name: 'empId',
        message: 'Pleae select an Employee',
        type: 'list',
        choices: empIDs
      },
      {
        name: 'role',
        message: 'Please select a role',
        type: 'list',
        choices: roleIDs
      }
    ])

    await client.query('UPDATE employees SET role_id = $2 WHERE id = $1', Object.values(answerObj))
  }
}
