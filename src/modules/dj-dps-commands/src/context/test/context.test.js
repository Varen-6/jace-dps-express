let contextCommand = require("../context");

describe("context.context test suite", () => {
  test("command should be defined", () => {
    expect(contextCommand).toBeDefined();
  });
  test("should set right context", () => {
    let command = {
      settings: {
        value: "Hello",
      },
    };
    let state = {
      head: {
        data: null,
        type: null,
      },
    };
    let result = contextCommand.execute(command, state);
    expect(result.head.data).toEqual("Hello");
    expect(result.head.type).toEqual("string");
  });
  test("should set right context", () => {
    let command = {
      settings: {
        value: [123],
      },
    };
    let state = {
      head: {
        data: null,
        type: null,
      },
    };
    let result = contextCommand.execute(command, state);
    expect(result.head.data).toEqual([123]);
    expect(result.head.type).toEqual("object");
  });
  test("should set right context", () => {
    let command = {
      settings: {
        value: 123,
      },
    };
    let state = {
      head: {
        data: null,
        type: null,
      },
    };
    let result = contextCommand.execute(command, state);
    expect(result.head.data).toEqual(123);
    expect(result.head.type).toEqual("number");
  });
  test("should set right context", () => {
    let command = {
      settings: {
        value: true,
      },
    };
    let state = {
      head: {
        data: null,
        type: null,
      },
    };
    let result = contextCommand.execute(command, state);
    expect(result.head.data).toEqual(true);
    expect(result.head.type).toEqual("boolean");
  });
});
