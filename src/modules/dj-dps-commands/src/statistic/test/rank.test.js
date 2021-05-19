let rankCommand = require("../rank")

describe("statistic.rank test suite", () => {
    test("command should be defined", () => {
        expect(rankCommand).toBeDefined()
    });
    test("Should return mapper error", () => {

        let command = {
            settings: {
                named: 'rankA',
                order: "asc",

            }
        };

        let state = {
            head: {
                data: [
                    {
                        a: 0,
                        b: 2
                    },
                    {
                        a: 1,
                        b: 1
                    },
                    {
                        a: 2,
                        b: 0
                    },
                ],
                type: "json"
            }
        };
        expect(() => {
            rankByCommand.execute(command, state)
        }).toThrow();

    });
    test("Should return ranked by \"a\" Array", () => {

        let command = {
            settings: {
                mapper: "a",
                named: 'rankA',
                order: "asc",

            }
        };

        let state = {
            head: {
                data: [
                    {
                        a: 0,
                        b: 2
                    },
                    {
                        a: 1,
                        b: 1
                    },
                    {
                        a: 2,
                        b: 0
                    },
                ],
                type: "json"
            }
        };
        let res = rankCommand.execute(command, state)
        expect(res.head.data).toEqual([
    {
        "a": 0,
        "b": 2,
        "rankA": 3
    },
    {
        "a": 1,
        "b": 1,
        "rankA": 2
    },
    {
        "a": 2,
        "b": 0,
        "rankA": 1
    }
])

    });

});