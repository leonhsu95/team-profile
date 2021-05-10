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

// Grabs inquirer questions from questions.js
const {managerQuestions, employeeQuestions} = require("./questions");


// Populate user input information from inquirer and attach to classes and constructors.
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

// If statement to determine whether more employees are added or not. When new employee request is made, 
// it saves the user input answer as according to the role of the new employee chosen from employeeQuestions in questions.js.
//  Otherwise, return and cancel the current function and proceed with addTeam function
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

// Turns the directory file to template literals get template HTML into a string to display information saved from constructors
async function populateTemplate(employee){
    try {
        const template = await readFilePromise(`./templates/${employee.getRole().toLowerCase()}.html`, "utf8");
        return eval("`" + template + "`");
    } 
    catch (error) {
        console.log(error);
    }
}

// Gets user input info for Manager then Engineer and Intern. Once saved and stringified
// turn HTML sections to array, split it when "insert" in identified and insert info saved into templates to html 
async function generateTemplate(){
    try{
        await addTeam();
        const templateHTML = await readFilePromise("./templates/template.html", "utf8");
        const templateHTMLArray = templateHTML.split("insert"); 
        const generated = await readFilePromise("./templates/generated.html", "utf8");
        await writeFilePromise("index.html", templateHTMLArray[0] + generated + templateHTMLArray[1], "utf-8");
    }
    catch(error){
        console.log(error);
    }
}

// Start function with inquirer to managerQuestions
function init(){
    inquirer.prompt(managerQuestions)
     .then(answers=>{
        generateTemplate();
        managerData(answers);
        
     })
     .catch(error => {
        if (error) {
            console.log(error);}
        }
     )
};

init();
