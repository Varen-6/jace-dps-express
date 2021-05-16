let infoCommand = require("../info")

describe("log.info test suite", () => {
    test("command should be defined", () => {
		expect(infoCommand).toBeDefined()
	});
    test("should return log head type", () => {

        let command = {
            settings:{}
        };

		let state= {
        };
		let result = infoCommand.execute(command, state);


    });

});
