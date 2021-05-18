let rankCommand = require("../rank")

describe("statistic.rank test suite", () => {
    test("command should be defined", () => {
        expect(rankCommand).toBeDefined()
    });
    test("Should return mapper error", () => {

        let command = {
            settings: {
                direction: "col",
                indexes: [0],
                asc: "az",

            }
        };

        let state = {
            head: {
                data: [1, 2, 3],
                type: "json"
            }
        };
        expect( () => { rankByCommand.execute(command, state) } ).toThrow();

    });
    test("Should ", () => {

        let command = {
            settings: {
                direction: "col",
                indexes: [0],
                asc: "az",
                mapper: 's'
            }
        };

        let state = {
            head: {
                data: [1, 2, 3],
                type: "json"
            }
        };
        rankCommand.execute(command, state)

    });

});