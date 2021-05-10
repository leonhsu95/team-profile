// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

const writeFilePromise = util.promisify(fs.writeFile);

const {managerQuestions, employeeQuestions} = require("./questions");

async function managerData(answers){
    try{
        const {id, name, email, officeNumber} = answers;
        const manager = new Manager(id, name, email, officeNumber);
        console.log(manager);
    }catch(error){
        console.log(error);
    }
}

async function engineerData(answers){
    try{
        const {id, name, email, gitHub} = answers;
        const engineer = new Engineer(id, name, email, gitHub);
        console.log(engineer);
    }catch(error){
        console.log(error);
    }
}


async function internData(answers){
    try{
        const {id, name, email, school} = answers;
        const intern = new Intern(id, name, email, school);
        console.log(intern);
    }catch(error){
        console.log(error);
    }
}

async function addTeam(){
    try{
        const{role, addMore, ...answers} = await inquirer.prompt(employeeQuestions);
        if(role === "Engineer"){
            await engineerData(answers);
        }
        if(role === "Intern"){
            await internData(answers);
        }
        if(role === "Manager"){
            await managerData(answers);
        }
        if(addMore === "YES"){
            await addTeam();
        }
        else{
            return false;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function generateTeam(){
    try{
        await addTeam();
    }
    catch(error){
        console.log(error);
    }
}

function init(){
    inquirer.prompt(managerQuestions)
     .then(answers=>{
        managerData(answers);
        generateTeam();
     })
     .catch(error => {
        if (error) {
            console.log(error);}
        }
     )
};

init();