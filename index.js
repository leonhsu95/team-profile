// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);

const {managerQuestions, engineerQuestions, internQuestions, addMember} = require("./questions");

inquirer.prompt(managerQuestions)