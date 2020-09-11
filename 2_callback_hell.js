/*
In computer programming, the pyramid of doom is a common problem that arises when a program uses many levels of nested indentation to control access to a function. It is commonly seen when checking for null pointers or handling callbacks.

Problems
    - Code is hard to read
    - Code is hard to debug
    - Difficult to handel errors
*/

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

// Removing the prymid does not fix the problem

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