/*
Async/await is a new way (syntactic sugar) of writing promises that are based on asynchronous code but make asynchronous code look and behave more like synchronous code. This is where the magic happens.

In computer science, syntactic sugar is syntax within a programming language that is designed to make things easier to read or to express.
*/

const getCustomerIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 4, 1, 5, 9]);
    }, 1000);
});

const Customer = customerId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const customer = [{
                name: 'Bruno',
                loyaltyPoints: 439
            }, {
                name: 'Kate',
                loyaltyPoints: 854
            }]
            resolve(customer[id]);
        }, 1500, customerId)
    })
}

async function getCustomer() {
    const Ids = await getCustomerIds;
    console.log(Ids);
    const customer = await Customer(Ids[2]);
    // console.log(customer);
    return customer;
}

getCustomer().then(customer => {
    console.log(customer);
});