const Employee = require('./employee');

class Manager extends Employee {
    constructor (id, name, email, phone) {
        super(id, name, email); 
        this.phone = phone;
        this.role = "Manager";
    }

    getPhone () {
        return this.phone; 
    }
}

module.exports = Manager; 