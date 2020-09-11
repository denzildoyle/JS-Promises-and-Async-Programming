const categories = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Categories loaded');
    }, 4000);
});

const statuses = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Statuses loaded');
    }, 1000);
});

const orders = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Orders loaded');
    }, 5000);
});

/*
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
*/

Promise.all([categories, statuses, orders])
    .then(([cat, stat, order]) =>{
        console.log(cat)
        console.log(stat)
        console.log(order)
    })

/*
The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise. It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.
*/

Promise.allSettled([categories, statuses, orders])
    .then(([cat, stat, order]) => {
        console.log(cat)
        console.log(stat)
        console.log(order)
    })