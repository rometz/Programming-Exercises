function aLoop(start, testFn, updateFn, bodyFn) {
    for (let value = start; testFn(value); value = updateFn(value)) {
        bodyFn(value);
    }
}