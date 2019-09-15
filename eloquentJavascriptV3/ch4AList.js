let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
let anArray = [1, 2, 3];

function arrayToList(array) {
    let list = null;
    for (i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(ele, list) {
    return Object.assign(ele, list);
}

function nth(list, el) {
    if(!list) {
        return undefined;
    } else if (el == 0) {
        return list.value;
    } else {
        return nth(list.rest, el - 1);
    }
}