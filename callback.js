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