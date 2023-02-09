import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter", () => {
  test("should return a greeting with two exclamation points", () => {
    const greeter = new LoudGreeter("Hello");
    const result = greeter.greet("Grant");
    expect(result).toBe("Hello, Grant!!");
  });

  test("should return a different greeting with a different name and two exclamation points", () => {
    const greeter = new LoudGreeter("Bonjour");
    const result = greeter.greet("Lauren");
    expect(result).toBe("Bonjour, Lauren!!");
  });

  test("should return a greeting with more exclamation points after calling addVolume", () => {
    const greeter = new LoudGreeter("Hello");
    greeter.addVolume();
    const result = greeter.greet("Grant");
    expect(result).toBe("Hello, Grant!!!");
  });

  test("should return a different greeting with a different name and more exclamation points after calling addVolume", () => {
    const greeter = new LoudGreeter("Bonjour");
    greeter.addVolume();
    const result = greeter.greet("Lauren");
    expect(result).toBe("Bonjour, Lauren!!!");
  });
});
