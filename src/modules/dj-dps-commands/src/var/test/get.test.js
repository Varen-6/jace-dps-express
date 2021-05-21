let getCommand = require("../get");

describe("Var.get test suite", () => {
  test("command should be defined", () => {
    expect(getCommand).toBeDefined();
  });
  test("should get and set correct type", () => {
    let command = {
      settings: {
        path: "",
        as: "",
      },
    };
    let state = {
      storage: {},
      head: {
        data: function () {},
        type: "",
      },
    };
    let result = getCommand.execute(command, state);
    expect(result.head.type).toBe("json");
  });
  test("should get and set correct type", () => {
    let command = {
      settings: {
        path: "$",
        as: "function",
      },
    };
    let state = {
      storage: {},
      head: {
        data: function () {},
        type: "",
      },
    };
    let result = getCommand.execute(command, state);
    expect(result.head.type).toBe("function");
    expect(result.head.data).toEqual({});
  });
});
