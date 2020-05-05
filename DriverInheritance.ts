import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

let shape = new Shape(10, 20);

console.log(shape.getInfo());

let rectangle = new Rectangle(0, 0, 10, 20);
console.log(rectangle.getInfo());

let circle = new Circle(0, 0, 0);
console.log(circle.getInfo());
