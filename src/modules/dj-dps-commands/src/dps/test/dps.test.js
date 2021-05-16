let dpsCommand = require("../dps")

describe("dps.dps test suite", () => {
    test("command should be defined", () => {
		expect(dpsCommand).toBeDefined()
	});
    test("should throw error", () => {

        let command = {settings:{}};

		let state= {
            head: {
                data: 'abcde',
                type: "log"
            }
        };
		expect( () => { countByCommand.execute(command, state) } ).toThrow();
    });
    test("should return dps head type", () => {

        let command = {settings:{}};

		let state= {
            head: {
                data: 'abcde',
                type: 'string'
            }
        };
		let result = dpsCommand.execute(command, state);
        expect(result.head.type).toBe("dps");
    });

});