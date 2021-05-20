let appendCommand = require("../append");

describe("Text.append test suite", () => {
  test("command should be defined", () => {
    expect(appendCommand).toBeDefined();
  });
  test("should throw exception when head type is missmatched", () => {
    let command = {};

    let state = {
      head: {
        data: [],
        type: "json",
      },
    };

    expect(() => {
      appendCommand.execute(command, state).toThrowError(AppendImplError);
    });
  });
  test("should append two string values", () => {
    let command = {
      settings: {
        value: "test",
      },
    };

    let state = {
      head: {
        data: "test1",
        type: "string",
      },
    };
    let result = appendCommand.execute(command, state);
    expect(result.head.data).toBe("test1test");
  });
  test("should throw exception when head.data type is missmatched ", () => {
    let command = {};

    let state = {
      head: {
        data: [],
        type: "string",
      },
    };
    expect(() => {
      appendCommand.execute(command, state).toThrowError(AppendImplError);
    });
  });
});
