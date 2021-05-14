let selectCommand = require("../take");

describe("Collection.take test suite", () => {
  test("command should be defined", () => {
    expect(selectCommand).toBeDefined();
  });
  test("should return correct result for empty collection", () => {
    let command = {
      settings: {
        criteria: (word) => word.length > 5,
      },
    };
    let state = {
      head: {
        data: [],
        type: "json",
      },
    };
    let result = selectCommand.execute(command, state);
    expect(result.head.data).toEqual([]);
  });
  test("should ", () => {
    let command = {
      settings: {
        criteria: (word) => word.length > 5,
      },
    };
    let state = {
      head: {
        data: ["test", "test1", "test12", "test123"],
        type: "json",
      },
    };
    let result = selectCommand.execute(command, state);
    expect(result.head.data).toEqual();
  });
});
