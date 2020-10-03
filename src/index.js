exports.min = function min(array) {
    if (array.length === 0) {
        return 0;
    }
    let x = array[0];
    for (let i = 1; i < array.length; i++) {
        if (x > array[i]) {
            x = array[i];
        }
    }
    return x;
};

exports.max = function max(array) {
    if (array.length === 0) {
        return 0;
    }
    let x = array[0];
    for (let i = 1; i < array.length; i++) {
        if (x < array[i]) {
            x = array[i];
        }
    }
    return x;
};

exports.avg = function avg(array) {
    if (array.length === 0) {
        return 0;
    }
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        x = x + arr[i];
    }
    return x / array.length;
};
