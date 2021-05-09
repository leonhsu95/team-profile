// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);


// Validation
let inputVal = (input) => {
   return (!input || input.trim() === "" ? "This field is required. Please try again" : true);
};

let emailRegex = (input) => {
   return (input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? true : "Please enter a valid email address");
};

// Create an array of questions for user input
const questions = [
   {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?", 
      validate: inputVal
   },    
   
];

