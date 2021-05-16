let groupByCommand = require("../groupby");

describe("Collection.groupby test suite", () => {
  test("command should be defined", () => {
    expect(groupByCommand).toBeDefined();
  });
  test("should return correct result for empty collection", () => {
    let command = {
      settings: {},
    };

    let state = {
      head: {
        data: [],
        type: "json",
      },
    };
    command.settings.criteria = (item) => item[attr_name];
    let res = groupByCommand.execute(command, state);
    expect(res.head.type).toBe("json");
    expect(res.head.data).toEqual([]);
  });
  test("should return counts for selected fields", () => {
    let command = {
      settings: {
        mapper: (d) => d.b,
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
    let attr_name = command.settings.criteria;
    command.settings.criteria = (item) => item[attr_name];
    let res = groupByCommand.execute(command, state);
    expect(res.head.type).toBe("json");
    expect(res.head.data).toEqual([
      {
        group: undefined,
        values: [
          { a: 1, b: "a" },
          { a: 2, b: "a" },
        ],
      },
    ]);
  });

  test("should throw exception when data is not a collection on head", () => {
    let command = {
      settings: {},
    };

    let state = {
      head: {
        data: {
          a: 1,
          b: "a",
        },
        type: "json",
      },
    };

    expect(() => {
      groupByCommand.execute(command, state);
    }).toThrow();
  });
});
