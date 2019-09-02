function countBs(string, char) {
    let beanCounter = 0;
    let charString = String(char);
    for (i = string.length; i > 0; i-- ) {
        if ( string[i-1] === charString ) {
            beanCounter++ 
        }
    }
    return beanCounter;
}

function countChar(str, char) {
    let newCount = countBs(str, char);
    return newCount;
}