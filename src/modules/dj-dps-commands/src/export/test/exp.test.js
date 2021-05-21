let expCommand = require("../exp")


describe("export.exp test suite", () => {
    test("command should be defined", () => {
        expect(expCommand).toBeDefined()
    });
    test("should return file url", () => {
        let command = {
            settings: {
                file: 'data.json'
            }
        };

        let state = {
            head:{
                data: 'Script',
                type: "json"
            }
        };

        result = expCommand.execute(command, state);
        expect(result.head.data.url).toBe('/downloads/data.json')

    });
    test("should throw incompatible file value", () => {
        let command = {
            settings: {
                file: {s:'2'}
            }
        };

        let state = {
            head:{
                data: 'Script',
                type: "json"
            }
        };

        expect(() => {
            expCommand.execute(command, state)
        }).toThrow();

    });
        test("should throw mime type not supported", () => {
        let command = {
            settings: {
                file: 'data.aboba'
            }
        };

        let state = {
            head:{
                data: 'Script',
                type: "json"
            }
        };

        expect(() => {
            expCommand.execute(command, state)
        }).toThrow();

    });

});
