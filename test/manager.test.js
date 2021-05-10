const Manager = require("../classes/manager.js");

describe("Manager Test", () => {
    
    it("Can set name via constructor arguments", () => {
        const name = "Peter";
        const e = new Manager(' ', name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor arguments", () => {
        
        const id = "0001";
        const e = new Manager(id);
        expect(e.id).toBe(id);
    });

    it("Can set email via constructor arguments", () => {
        
        const email ="peter@gmail.com";
        const e = new Manager(' ' ,' ' , email);
        expect(e.email).toBe("peter@gmail.com");
    });

    it("Can set role via constructor arguments", () => {
        
        const role = "Manager";
        const e = new Manager(' ' ,' ' ,' ' , ' ' , role);
        expect(e.role).toBe("Manager");
    });

    it('Can get officeNumber via getOfficeNumber()', () => {
        let officeNumber = '98765432';
        let e = new Manager(' ', ' ', ' ', officeNumber);
        expect(e.getOfficeNumber()).toEqual('98765432');
    });

});