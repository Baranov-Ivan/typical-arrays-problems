
exports.min = function min (array) {
    if(Array.isArray(array) && array.length)
        return array.reduce((minValue, currentValue) => currentValue < minValue ? minValue = currentValue : minValue, Infinity);
    return 0;
}

exports.max = function max (array) {
    if(Array.isArray(array) && array.length)
        return array.reduce((maxValue, currentValue) => currentValue > maxValue ? maxValue = currentValue : maxValue, -Infinity);
    return 0;
}

exports.avg = function avg (array) {
    if(Array.isArray(array) && array.length && arguments.length > 0)
        return array.reduce((sum, currentValue) => sum + currentValue, 0)/array.length;
    return 0;
}
