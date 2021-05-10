let textCommand = require("../text");

describe("Text.text test suite", () => {
  test("command should be defined", () => {
    expect(textCommand).toBeDefined();
  });
  test("should throw error when head type is missmatched", () => {
    let command = {};
    let state = {
      head: {
        data: 123,
        type: "number",
      },
    };
    expect(() => textCommand.execute(command, state).toThrowError(TextError));
  });
  test("should set head type to `string`", () => {
    let command = {};
    let state = {
      head: {
        data: 123,
        type: "string",
      },
    };
    let result = textCommand.execute(command, state);
    expect(result.head.type).toBe("string");
  });
});
``