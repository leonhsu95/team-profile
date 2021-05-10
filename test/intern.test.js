const Intern = require("../classes/intern.js");

describe("Intern Test", () => {
    
    it("Can set name via constructor arguments", () => {
        const name = "Peter";
        const e = new Intern(' ', name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor arguments", () => {
        
        const id = "0001";
        const e = new Intern(id);
        expect(e.id).toBe(id);
    });

    it("Can set email via constructor arguments", () => {
        
        const email ="peter@gmail.com";
        const e = new Intern(' ' ,' ' , email);
        expect(e.email).toBe("peter@gmail.com");
    });

    it("Can set role via constructor arguments", () => {
        
        const role = "Intern";
        const e = new Intern(' ' ,' ' ,' ' , ' ' , role);
        expect(e.role).toBe("Intern");
    });

    it('Can get officeNumber via getSchool()', () => {
        let school = 'UTS';
        let e = new Intern(' ', ' ', ' ', school);
        expect(e.getSchool()).toEqual('UTS');
    });

});