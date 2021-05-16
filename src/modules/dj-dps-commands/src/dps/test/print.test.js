let printCommand = require("../print")

describe("dps.print test suite", () => {
    test("command should be defined", () => {
		expect(printCommand).toBeDefined()
	});
    test("should return json head type", () => {

        let command = {settings:{}};

		let state= {
            head: {
                data: [],
                type: "dps"
            }
        };
		let result = printCommand.execute(command, state);
        expect(result.head.type).toBe("dps");
    });

});