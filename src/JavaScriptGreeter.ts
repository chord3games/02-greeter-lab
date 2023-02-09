import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  greet(name: string) {
    return `console.log('${super.greet(name)}')`;
  }
}

export default JavaScriptGreeter;
