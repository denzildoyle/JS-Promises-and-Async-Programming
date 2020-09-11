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