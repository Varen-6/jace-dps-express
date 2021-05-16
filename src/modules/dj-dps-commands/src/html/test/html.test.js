let htmlCommand = require("../html")

describe("html.html test suite", () => {
    test("command should be defined", () => {
		expect(htmlCommand).toBeDefined()
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
    test("should return html head type", () => {

        let command = {settings:{}};

		let state= {
            head: {
                data: 'Ask someone else',
                type: 'string'
            }
        };
		let result = htmlCommand.execute(command, state);
        expect(result.head.type).toBe("html");
    });

});