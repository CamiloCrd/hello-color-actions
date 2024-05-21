const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola desde CDMX el 20 de Mayo a las 9pm");
  });
});
