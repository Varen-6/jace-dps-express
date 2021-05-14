let takeCommand = require("../take");

describe("Collection.take test suite", () => {
  test("command should be defined", () => {
    expect(takeCommand).toBeDefined();
  });
  test("should return error when head.data is not an array", () => {
    let command = {
      settings: {
        start: 1,
        stop: 5,
      },
    };
    let state = {
      head: {
        data: 123,
        type: "",
      },
    };
    expect(() => {
      takeCommand.execute(command, state).toThrowError();
    });
  });
  test("should return correct result for empty collection", () => {
    let command = {
      settings: {
        start: 1,
        stop: 5,
      },
    };
    let state = {
      head: {
        data: [],
        type: "json",
      },
    };
    let result = takeCommand.execute(command, state);
    expect(result.head.data).toEqual([]);
  });
  test("should ", () => {
    let command = {
      settings: {
        start: 1,
        stop: 5,
      },
    };
    let state = {
      head: {
        data: [
          {
            a: 1,
            b: "a",
          },
          {
            a: 2,
            b: "a",
          },
        ],
        type: "json",
      },
    };
    let result = takeCommand.execute(command, state);
    expect(result.head.data).toBe();
  });
});
