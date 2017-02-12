// Prototype implentation:
    // function reduce(array, callback, startingValue){
    //     var resultSoFar = startingValue;
    //     for (var i = 0; i < array.length; i++){
    //         resultSoFar = callback(resultSoFar, array[i], i, array);
    //     };
    //     return resultSoFar;
    // }

// MDN reduce syntax
    // arr.reduce(callback(accumulator, currentValue, currentIndex, array)[, initialValue])

var reduce = function(array, callback, initialValue){
    var startingIndex = 0;
    var accumulator = initialValue;
    var arrayKeys = Object.keys(array)
    var length = array.length

    if (arguments.length < 3){
        if(arrayKeys.length === 0){
            throw new TypeError('Reduce of empty array with no initial value');
        };
        if (arrayKeys.length === 1){
            var objectKeyIndex = arrayKeys[0];
            var onlyArrayElement = array[objectKeyIndex];
            return onlyArrayElement;
        };
        while (startingIndex in array === false && startingIndex < length){
            startingIndex++;
        };
        accumulator = array[startingIndex];
        startingIndex++;
    } else {
        if (arrayKeys.length === 0){
            return initialValue;
        };
    };
    for (var i = startingIndex; i < length; i++){
        if (i in array){
            accumulator = callback(accumulator, array[i], i, array);
        };
    };
    return accumulator;
}