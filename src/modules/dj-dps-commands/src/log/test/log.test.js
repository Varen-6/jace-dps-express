let logCommand = require("../log")

describe("log.log test suite", () => {
    test("command should be defined", () => {
		expect(logCommand).toBeDefined()
	});
    test("should return log head type", () => {

        let command = {};

		let state= {
            head: {
                data: [],
                type: "log"
            }
        };
		let result = logCommand.execute(command, state);
        expect(result.head.type).toBe("log");
    });

});