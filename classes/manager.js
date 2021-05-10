const Employee = require('./employee');

class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
        super(id, name, email); 
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getfficeNumber () {
        return this.officeNumber; 
    }
}

module.exports = Manager; 