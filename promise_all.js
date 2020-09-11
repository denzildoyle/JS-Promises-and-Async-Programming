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

Promise.all([categories, statuses, orders])
.then(([cat, stat, order]) =>{
    console.log(cat)
    console.log(stat)
    console.log(order)
})