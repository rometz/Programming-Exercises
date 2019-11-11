let manyArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function flattening(arrayOfArrays) {
    return (arrayOfArrays.reduce(function(e, f) {
        return e.concat(f)
    }))
}

console.log(flattening(manyArrays));