let csvCommand = require("../csv");

describe("Csv.csv test suite", () => {
  test("command should be defined", () => {
    expect(csvCommand).toBeDefined();
  });
  test("should throw error when head type is missmatched", () => {
    let command = {};
    let state = {
      head: {
        data: 123,
        type: "json",
      },
    };

    expect(() => {
      csvCommand.execute(command, state).toThrowError(XmlError);
    });
  });
  test("should return csv head type", () => {
    let command = {};
    let state = {
      head: {
        data: 123,
        type: "string",
      },
    };
    let result = csvCommand.execute(command, state);
    expect(result.head.type).toBe("csv");
  });
});
