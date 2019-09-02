// The below function isEven() works for all integers. Why do it recursively?

function isEven(number) {
    if ( number < 0 ) {
        number *= (-1);
    } 
    if ( number % 2 === 1 ) {
        console.log(`${number} is odd.`);
    } else {
        console.log(`${number} is even.`);
    }
}

// The below function isEvenRecursion() is done recursively (for some reason).

function isEvenRecursion(number) {
    if (number === 0) {
        return(true);
    } else if (number === 1) {
        return(false);
    } else {
        return(isEvenRecursion(number -2));
    }
}