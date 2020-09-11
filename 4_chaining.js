/*
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.We accomplish this by creating a promise chain.

Here's the magic: the then() function returns a new promise, different from the original:
*/

const getCustomerIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2,4,1,5,9]);
    }, 1000);
});

const Customer = customerId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const customer = [{
                name: 'Bruno',
                loyaltyPoints: 439
            },{
                name: 'Kate',
                loyaltyPoints: 854
            }]
            if (customer[id] === undefined) {
                reject("Could not find customer");
            }
            resolve(customer[id]);
        }, 1500, customerId)
    })
}

getCustomerIds
.then(Ids => {
    console.log(Ids[2])
    return Customer(Ids[3])
}).then(customer => {
    console.log(customer);
}).catch(error => {
    console.log(error)
});