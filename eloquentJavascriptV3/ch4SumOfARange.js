let rangeArray = [];

function range(start, end, step) {
    for (i = start; i <= end; i += step) {
        rangeArray.push(i);
    }
    return rangeArray;
}

function sum(array) {
    return array.reduce((a,b) => a + b, 0);
}