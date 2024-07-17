const returnMoney = new Promise((resolve, reject) => {
    const amount = 200;
    const recievedAmount = Math.random() > 0.5 ? amount : "empty";
    if (recievedAmount === amount){
    setTimeout(() => {
        resolve("suceccfuly returened money.!!!")
    }, 1000)
} else {
    reject("Failure.! unable to return money.")
}
});

returnMoney
.then((value) => {
    console.log(value);
    console.log("Thank you for returning money!")
})
.catch((error) => {
    console.log("very bad.")
    console.log(error);
})
.finally(() => {
    console.log("Ainda paisy nh dunga..~");
});
