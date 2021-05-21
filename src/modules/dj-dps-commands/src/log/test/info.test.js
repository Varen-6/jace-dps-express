let infoCommand = require("../info")


describe("log.info test suite", () => {
    test("command should be defined", () => {
        expect(infoCommand).toBeDefined()
    });
    test("should put message into loggerZZ", () => {
                let command = {
            settings: {
                value: "Message"
            }
        };
        console.stdlog = console.log.bind(console);
        console.logs = [];
        console.log = function () {
            console.logs.push(Array.from(arguments));
            console.stdlog.apply(console, arguments);
        }

        let state = {};

        infoCommand.execute(command, state);
        expect(console.logs.toString()).toContain(command.settings.value)

    });

});
