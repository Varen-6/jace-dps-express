let html_selectCommand = require("../html-select")
let cheerio = require("cheerio")

describe("html.html-select test suite", () => {
    test("command should be defined", () => {
		expect(html_selectCommand).toBeDefined()
	});
    test("should return log head type", () => {

        let command = {
            settings: {}
        };


		let state= {
            head: {
                data: "221321",
                type: ""
            }
        };
		let result = html_selectCommand.execute(command, state);


    });

});
