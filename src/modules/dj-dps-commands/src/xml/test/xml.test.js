let xmlCommand = require("../xml");

describe("Xml.xml test suite", () => {
  test("command should be defined", () => {
    expect(xmlCommand).toBeDefined();
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
      xmlCommand.execute(command, state).toThrowError(XmlError);
    });
  });
  test("should return xml head type", () => {
    let command = {};
    let state = {
      head: {
        data: 123,
        type: "string",
      },
    };
    let result = xmlCommand.execute(command, state);
    expect(result.head.type).toBe("xml");
  });
});
