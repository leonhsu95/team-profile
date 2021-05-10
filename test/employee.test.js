const Employee = require("../classes/employee.js");

describe("Employee Test Sequence", () => {
    
    it("Can set name via constructor arguments", () => {
        const name = "Peter";
        const e = new Employee(' ', name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor arguments", () => {
        
        const id = "0001";
        const e = new Employee(id);
        expect(e.id).toBe(id);
    });

    it("Can set email via constructor arguments", () => {
        
        const email ="peter@gmail.com";
        const e = new Employee(' ' ,' ' , email);
        expect(e.email).toBe("peter@gmail.com");
    });

    it("Can set role via constructor arguments", () => {
        
        const role = "Employee";
        const e = new Employee(' ' ,' ' ,' ' , role);
        expect(e.role).toBe("Employee");
    });

    it('Can get name via getName()', () => {
        let name = 'Peter';

        let e = new Employee(' ', name);
        expect(e.getName()).toEqual('Peter');
    })

    it('Can get id via getID()', () => {
        let id = '0001';

        let e = new Employee(id);
        expect(e.getID()).toEqual('0001');
    })

    it('Can get email via getEmail()', () => {
        let email = 'peter@gmail.com';

        let e = new Employee(' ', ' ', email);
        expect(e.getEmail()).toEqual('peter@gmail.com');
    })

    it('getRole() should return "Employee"', () => {
        let e = new Employee();
        expect(e.getRole()).toEqual('Employee');
    })

})