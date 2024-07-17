"use strict";
// function washing(callback: () => void){
//     console.log("washing started...!");
//     setTimeout(() => {
//         console.log("washing done.");
//         callback();
//     }, 5000);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function soaking(callback: () => void){
//     console.log("food serve to childern.")
//     console.log("soaking started...!");
//     setTimeout(() => {
//         console.log("soaking done.");
//         callback();
//     }, 3000);
// }
// function drying(callback: () => void){
//     console.log("drying started...!");
//     console.log("send childern to school..")
//     setTimeout(() => {
//         console.log("drying done.");
//         callback()
//     }, 2000);
// }
// function dayCompleted(){
//     console.log("Day completed...!");
// }
// console.log("Folding laundry...");
// washing(() => {
//     soaking(() => {
//         drying(dayCompleted);
//     });
// });
// console.log("I am making biryani...");
// ========== CALLBAK ACHIEVE BY PROMISE ==========
function washing() {
    console.log("washing started.");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("washing done.");
        }, 5000);
    });
}
function soaking() {
    console.log("soaking started.");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("soaking done.");
        }, 3000);
    });
}
function drying() {
    console.log("drying started.");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("drying done.");
        }, 1000);
    });
}
function dayComplete() {
    return new Promise((resolve, reject) => {
        resolve("Day Completed.");
    });
}
// console.log("Folding Laundry");
// washing().then((value) => {
//     console.log(value);
//     return soaking();
// }).then((value) => {
//     console.log(value);
//     return drying();
// }).then((value) => {
//     console.log(value);
//     return dayComplete();
// }).then((value) => {
//     console.log(value);
// })
// console.log("I am making biryani...");
// ========= PROMISE HANDLING THROUGH ASYNC AWAIT ==========
async function runWahingMachine() {
    try {
        const result1 = await washing();
        console.log(result1);
        const result2 = await soaking();
        console.log(result2);
        const result3 = await drying();
        console.log(result3);
        const result4 = await dayComplete();
        console.log(result4);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("I will run anyway.");
    }
}
console.log("Folding Laundry.");
runWahingMachine();
console.log("I am making biryani.");
