const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola desde CDMX el 20 de mayo a las 9pm");
  });
});
