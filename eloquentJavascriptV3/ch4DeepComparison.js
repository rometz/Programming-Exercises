function deepEqual(x, y) {
    // first, check to see if they are deeply the same. 
    if (x === y) {
        return true;
    }
    // now, we begin the fun stuff:
    // we first have to check if they are objects AND they are not null
    else if ((typeof x == "object" && x !=null) && (typeof y == "object" && y !=null)) {
        // at this point, we check how many keys the two objects have
        // we do this to deeply check exactly how they are the same, object by object...
        if (Object.keys(x).length != Object.keys(y).length)
            return false;
        // now, we can begin to deeply check using a callback to deepEqual()
        for (var prop in x) {
            // this line below, checks if the key of 'y' has the same property as the key in 'x'
            if (y.hasOwnProperty(prop)) {
                // if this is true, we go down to below our for loop and return true
                // if ! (false), rinse and repeat with a callback
                if (! deepEqual(x[prop], y[prop]))
                    return false;
            } 
            else 
                return false;
        }
        return true;
    } 
    else 
        return false;
}

