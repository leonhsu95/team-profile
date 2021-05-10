const Employee = require('./employee');

class Intern extends Employee {
    constructor (id, name, email, school) {
        super(id, name, email);
        this.id = id;
        this.name = name;
        this.email = email; 
        this.school = school; 
        this.role = "Intern";
        
    }

    getSchool () {
        return this.school;
    }
}

module.exports = Intern; 