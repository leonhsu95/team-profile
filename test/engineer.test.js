const Engineer = require("../classes/engineer.js");

describe("Engineer Test", () => {
    
    it("Can set name via constructor arguments", () => {
        const name = "Peter";
        const e = new Engineer(' ', name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor arguments", () => {
        
        const id = "0001";
        const e = new Engineer(id);
        expect(e.id).toBe(id);
    });

    it("Can set email via constructor arguments", () => {
        
        const email ="peter@gmail.com";
        const e = new Engineer(' ' ,' ' , email);
        expect(e.email).toBe("peter@gmail.com");
    });

    it("Can set role via constructor arguments", () => {
        
        const role = "Engineer";
        const e = new Engineer(' ' ,' ' ,' ' , ' ' , role);
        expect(e.role).toBe("Engineer");
    });

    it('Can get gitHub via getGitHub()', () => {
        let gitHub = 'petrex';
        let e = new Engineer(' ', ' ', ' ', gitHub);
        expect(e.getGitHub()).toEqual('petrex');
    });

});