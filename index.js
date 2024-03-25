var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
    
}


function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'not bob';
    try {
        leastFavoriteCustomer = 'bob';
    } catch (error) {
        throw new Error('Error:Assignment to constant variable. ');
    }
}