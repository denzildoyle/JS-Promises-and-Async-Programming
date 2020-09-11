/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Callback:
    - Allow functions to run in the "background"
    - Are called when the function finishes its work
    - Are non - blocking
*/

const findCustomer = () => {
    setTimeout(() => {
        console.log('\nCustomer found! \n');
    }, 2000);
}

const startSearch = () => {
    console.log('\nSearching...');
    findCustomer();
    console.log('...');
    console.log('......');
    console.log('.........');
}

startSearch();