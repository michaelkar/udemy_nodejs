let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Argument must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, 7).then((result) => {
    console.log('Result:', result);
    return asyncAdd(result, 33);
}).then((res) => {
    console.log('Should be 45:', res)
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolved or rejected once, before that in pending state, after - settled
//         resolve('Hey, it worked!');
//         //reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ' + message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });