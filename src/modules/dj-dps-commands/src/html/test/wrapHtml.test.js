let wrapHtmlCommand = require("../wrapHtml")

describe("html.wrapHtml test suite", () => {
    test("command should be defined", () => {
		expect(wrapHtmlCommand).toBeDefined()
	});
    test("should return html head type", () => {

        let command = {settings:{
            tag: "tr"
            }};

		let state= {
            head: {
                data: 'Ask someone else',
                type: 'string'
            }
        };
		let result = wrapHtmlCommand.execute(command, state);
        expect(result.head.type).toBe("html");
        expect(result.head.data).toEqual("<tr>Ask someone else</tr>")
    });

});