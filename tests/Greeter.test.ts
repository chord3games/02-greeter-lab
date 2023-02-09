import { Greeter } from "../src/Greeter";

describe("greeter class", () => {
  test("the name property is set from the parameter list", () => {
    const greeter: Greeter = new Greeter("James");
    expect(greeter.greeting).toBe("James");
  });
  test("greet method works", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greet("Stein")).toBe("Hello, Stein!");
  });
});
