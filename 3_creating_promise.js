// The Promise object represents the eventual completion(or failure) of an asynchronous operation, and its resulting value.

const getCustomerIds = new Promise((resolve, reject) =>{
    // Promise state pending (when running)
    setTimeout(() => {
        resolve([2,4,1,5,9]);
    }, 1000);
});

getCustomerIds
.then(Ids =>{
    // Promise state settled (fulfilled)
    console.log(Ids)
}).catch(error =>{
    // Promise state settled (rejected)
    console.log(error)
});