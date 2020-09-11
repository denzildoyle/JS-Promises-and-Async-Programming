setTimeout(() => {
    // get customerID where name is "Denzil"
    setTimeout((customerID) => {
        // get orders where for customer 7097907
        setTimeout((orders) => {
            // do something with order
        }, 2000);
    }, 2000);
}, 2000);


setTimeout(() => {
    // get customerID where name is "Denzil"
    if (customerID){
        setTimeout((customerID) => {
            // get orders where for customer 7097907
            if (customerID){
                setTimeout((orders) => {
                    // do something with order
                }, 2000);
            } else{
                // orders not found
            }
        }, 2000);
    } else{
        // customer not found
    }
}, 2000);




setTimeout(() => {
// get customerID where name is "Denzil"
if (customerID) {
setTimeout((customerID) => {
// get orders where for customer 7097907
if (customerID) {
setTimeout((orders) => {
// do something with order
}, 2000);
} else {
// orders not found
}
}, 2000);
} else {
// customer not found
}
}, 2000);


const get