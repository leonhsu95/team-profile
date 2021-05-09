// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

const writeFilePromise = util.promisify(fs.writeFile);

const {managerQuestions, engineerQuestions, internQuestions, addMember} = require("./questions");

const managerData = async(answers)=>{
    try{
        const {id, name, email, phone} = answers;
        const manager = new Manager(name, id, email, phone);
        console.log(manager)
    }catch(error){
        console.log(error);
    }
}

function init(){
    inquirer.prompt(managerQuestions)
     .then(answers=>{
        managerData(answers);
     })
     .catch(error => {
        if (error) {
            console.log(error);}
        }
     )
};

init();