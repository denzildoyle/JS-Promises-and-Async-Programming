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