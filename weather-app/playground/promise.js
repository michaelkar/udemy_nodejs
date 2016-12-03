let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolved or rejected once, before that in pending state, after - settled
        resolve('Hey, it worked!');
        //reject('Unable to fulfill promise');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Success: ' + message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});