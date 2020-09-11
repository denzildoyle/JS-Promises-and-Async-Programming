const getCustomerIds = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve([2,4,1,5,9]);
    }, 1000);
});

getCustomerIds
.then(Ids =>{
    console.log(Ids)
}).catch(error =>{
    console.log(error)
});