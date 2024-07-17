function parentFunction(func: () => void) {
    func();
    console.log("I am the parent function.");
    func();
}

function childFunction() {
    console.log("I am the child function.");
}

parentFunction(childFunction);


function userName(callback: (name: string) => void){
    console.log("I welcome to the user.");
    callback("Malia Raees");
}

function greet(name: string) {
    console.log(`Hello! My dear ${name}.`);
}

userName(greet);

type Car = {
    brand: string;
    model: string;
    year: number;
    isUsed: boolean;
}

const car: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    isUsed: true
}

console.log(car.brand);
console.log(car['model']);
