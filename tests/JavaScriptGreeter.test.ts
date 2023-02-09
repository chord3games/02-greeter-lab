import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("should return a greeting wrapped in a console.log statement", () => {
    const greeter = new JavaScriptGreeter("Hello");
    const result = greeter.greet("Grant");
    expect(result).toBe("console.log('Hello, Grant!')");
  });

  test("should return a different greeting with a different name wrapped in a console.log statement", () => {
    const greeter = new JavaScriptGreeter("Bonjour");
    const result = greeter.greet("Lauren");
    expect(result).toBe("console.log('Bonjour, Lauren!')");
  });
});
