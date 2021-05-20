let strCommand = require("../str");

describe("Text.str test suite", () => {
  test("command should be defined", () => {
    expect(strCommand).toBeDefined();
  });
  test("should throw error when head type is missmatched", () => {
    let state = {
      head: {
        data: 123,
        type: "json",
      },
    };

    expect(() => {
      strCommand.execute(state).toThrowError();
    });
  });
  test("should convert to string head data", () => {
    let command = {};
    let state = {
      head: {
        data: 123,
        type: "string",
      },
    };
    let result = strCommand.execute(command, state);
    expect(result.head.data).toBe("123");
  });
});
