const Employee = require('./employee');

class Engineer extends Employee {
    constructor (id, name, email, gitHub) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email;
        this.gitHub = gitHub; 
        this.role = "Engineer";
        
    }

    getGitHub () {
        return this.gitHub;
    }
}

module.exports = Engineer; 