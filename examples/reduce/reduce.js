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

    //if no initialValue
    if (arguments.length < 3){

        if(Object.keys(array).length === 0){
            throw new TypeError('Reduce of empty array with no initial value');
        };

        if (Object.keys(array).length === 1){
            var objectKeyIndex = Object.keys(array)[0];
            var onlyArrayElement = array[objectKeyIndex];
            return onlyArrayElement;
        };
        while (startingIndex in array === false && startingIndex < array.length){
            startingIndex++;
        };
        accumulator = array[startingIndex];
        startingIndex++;

    } else {
        if (Object.keys(array).length === 0){
            return initialValue;
        }
    };

    for (var i = startingIndex; i < array.length; i++){
        if (i in array){
            accumulator = callback(accumulator, array[i], i, array);
        };
    };
    return accumulator;
}