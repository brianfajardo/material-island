var map = function (originalArray, callback, optionalThisObject){

    var mapCallback = callback;

    if (optionalThisObject){
        mapCallback = callback.bind(optionalThisObject);
    };

    var mappedArray = []

    for (var i = 0; i < originalArray.length; i++){
        if (i in originalArray){
            mappedArray[i] = (mapCallback(originalArray[i], i, originalArray));
            // mappedArray.push(mapCallback(originalArray[i], i, originalArray));
        };
    };

    return mappedArray;
};

// Note the difference between lines 13 and 14.
// If we have an array = [ , 1], where array[0] is missing/unassigned, and have a callback function that takes the number * 2, 
// line 14 returns a mappedArray = [2]. The 0 index of the original array is not put through the callback and therefore mappedArray[0] = 2
// In contrast, line 13 will also skip array[0], however, instead of the .push method, we set mappedArray[i] and therefore will return mappedArray = [ , 2], similar to the native map function