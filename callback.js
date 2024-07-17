"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parentFunction(func) {
    func();
    console.log("I am the parent function.");
    func();
}
function childFunction() {
    console.log("I am the child function.");
}
parentFunction(childFunction);
function userName(callback) {
    console.log("I welcome to the user.");
    callback("Malia Raees");
}
function greet(name) {
    console.log(`Hello! My dear ${name}.`);
}
userName(greet);
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    isUsed: true
};
console.log(car.brand);
console.log(car['model']);
