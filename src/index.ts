import Greeter from "../src/Greeter";
import JavaScriptGreeter from "../src/JavaScriptGreeter";
import LoudGreeter from "../src/LoudGreeter";
import HtmlGreeter from "../src/HTMLGreeter";

const greeter = new Greeter("Hello");
console.log(greeter.greet("Grant"));

const javascriptGreeter = new JavaScriptGreeter("Hello");
console.log(javascriptGreeter.greet("Grant"));

const loudGreeter = new LoudGreeter("Hello");
loudGreeter.addVolume();
console.log(loudGreeter.greet("Grant"));

const htmlGreeter = new HtmlGreeter("Hello");
console.log(htmlGreeter.greet("Grant"));
