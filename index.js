// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Add Classes
const Manager = require("./classes/manager");
const Engineer = require("./classes/engineer");
const Intern = require("./classes/intern");

// Util Functions

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
const appendFilePromise = util.promisify(fs.appendFile);

const {managerQuestions, employeeQuestions} = require("./questions");

async function managerData(answers){
    try{
        const {id, name, email, officeNumber} = answers;
        const manager = new Manager(id, name, email, officeNumber);
        const generated = await populateTemplate(manager);      
        await writeFilePromise("./templates/generated.html", generated, "utf8");  
    }
    catch(error){
        console.log(error);
    }
}

async function engineerData(answers){
    try{
        const {id, name, email, gitHub} = answers;
        const engineer = new Engineer(id, name, email, gitHub);
        const generated = await populateTemplate(engineer);      
        await appendFilePromise("./templates/generated.html", generated, "utf8");  
    }
    catch(error){
        console.log(error);
    }
}


async function internData(answers){
    try{
        const {id, name, email, school} = answers;
        const intern = new Intern(id, name, email, school);
        const generated = await populateTemplate(intern);      
        await appendFilePromise("./templates/generated.html", generated, "utf8"); 
    }
    catch(error){
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

async function populateTemplate(employee){
    try {
        const template = await readFilePromise(`./templates/${employee.getRole().toLowerCase()}.html`, "utf8");
        return eval("`" + template + "`");
    } 
    catch (error) {
        console.log(error);
    }
}

async function generateTeam(){
    try{
        await addTeam();
        const indexHTML = await readFilePromise("./templates/index.html", "utf8");
        const indexHTMLArray = indexHTML.split("insert"); 
        const generated = await readFilePromise("./templates/generated.html", "utf8");
        await writeFilePromise("./output/team.html", indexHTMLArray[0] + generated + indexHTMLArray[1], "utf-8");
    }
    catch(error){
        console.log(error);
    }
}

function init(){
    inquirer.prompt(managerQuestions)
     .then(answers=>{
        generateTeam();
        managerData(answers);
        
     })
     .catch(error => {
        if (error) {
            console.log(error);}
        }
     )
};

init();
