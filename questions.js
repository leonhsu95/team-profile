// Validation
let inputVal = (input) => {
    return (!input || input.trim() === "" || input.length < 1 ? "This field is required. Try again." : true);
};

let numberVal = (input) => {
    return (isNaN(input) ? "Invalid ID Number. Try again." : true);
};

let emailVal = (input) => {
    return (input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? true : "Please enter a valid email address");
};

// function idVal(input){
//    if(managerQuestions.id == teamQuestions.id){
//       return `Employee's ID can not match existing manager ID. Try again.`;
//    }
//    if(!isNaN(input)){
//       return `Invalid ID Number. Try again.`
//    }
//    else{
//       return true;
//    }
// }


// Create an array of questions for team
const managerQuestions = [
{
    type: "input",
    name: "id",
    default: "0001",
    message: "Please enter manager's employee's ID.", 
    validate: numberVal
}, 
{
    type: "input",
    name: "name",
    message: "Please enter manager's name.", 
    validate: inputVal
}, 
{
    type: "input",
    name: "email",
    message: "Please enter manager's email address.", 
    validate: emailVal
},
{
    type: "input",
    name: "phone",
    message: "Please enter manager's office number.", 
    validate: numberVal
},      
];  

const engineerQuestions = [
{
    type: "input",
    name: "id",
    default: "0002",
    message: "Please enter employee's ID.", 
    validate: numberVal
}, 
{
    type: "input",
    name: "name",
    message: "Please enter employee's name.", 
    validate: inputVal
}, 
{
    type: "input",
    name: "github",
    message: "Please enter employee's GitHub username.", 
    validate: inputVal
},
{
    type: "input",
    name: "email",
    message: "Please enter employee's email address.", 
    validate: emailVal
},      
];

const internQuestions = [
{
    type: "input",
    name: "id",
    default: "0002",
    message: "Please enter employee's ID.", 
    validate: numberVal
}, 
{
    type: "input",
    name: "name",
    message: "Please enter employee's name.", 
    validate: inputVal
}, 
{
    type: "input",
    name: "school",
    message: "Please enter employee's school.", 
    validate: inputVal
},
{
    type: "input",
    name: "email",
    message: "Please enter employee's email address.", 
    validate: emailVal
},      
];

const addMember = [
{
    type: "list",
    name: "role",
    message: "Add more members?",
    choices: ["Engineer", "Intern", "Manager", "NO"]
}     
];

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMember
}

