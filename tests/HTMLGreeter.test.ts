import HtmlGreeter from "../src/HTMLGreeter";

describe("HtmlGreeter", () => {
  test("should return a greeting wrapped in an h1 tag", () => {
    const greeter = new HtmlGreeter("Hello");
    const result = greeter.greet("John");
    expect(result).toBe("<h1>Hello, John!</h1>");
  });

  test("should return a greeting wrapped in a custom tag", () => {
    const greeter = new HtmlGreeter("Hi", "h2");
    const result = greeter.greet("Jane");
    expect(result).toBe("<h2>Hi, Jane!</h2>");
  });
});
