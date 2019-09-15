let randomArray = [Math.random(), Math.random(), Math.random()];

function reverseArray(arr) {
    let newArray = [];
    for ( i = 0; i < arr.length; i++ ) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    const i = 0,
        n = arr.length,
        middle = Math.floor(n / 2),
        temp = null;

    for (; i < middle; i += 1) {
        temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
}