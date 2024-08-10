const inquirer = require('inquirer');
const client = require('./db/connection');
const Dept = require('./models/dept');
const Role = require('./models/role');
const Employee = require('./models/employee');

async function showMainMenu() {
  const answerObj = await inquirer.prompt({
    name: 'option',
    message: 'What would you like to do?',
    type: 'list',
    choices: [
      'Show all Departments',
      'Add a Department',
      'Show all Roles',
      'Add a Role',
      'Show all Employees',
      'Add an Employee',
      'Update an Employee\'s Role'
    ]
  });

  switch (answerObj.option) {
    case 'Show all Departments':
      console.table(await Dept.getDept());
      break;
    case 'Add a Department':
      await Dept.addDept();
      console.table(await Dept.getDept());
      break;

    case 'Show all Roles':
      console.table(await Role.getRole());
      break;
    case 'Add a Role':
      await Role.addRole();
      console.table(await Role.getRole());
      break;

    case 'Show all Employees':
      console.table(await Employee.getEmployee());
      break;
    case 'Add an Employee':
      await Employee.addEmployee();
      console.table(await Employee.getEmployee());
      break;
    case 'Update an Employee\'s Role':
      await Employee.updateRole();
      console.table(await Employee.getEmployee());
      break;
  }
  process.exit();
}


async function init() {
  await client.connect();
  let data;

  showMainMenu();
}

init();
