//working through the filter function

var filter = function (originalArray, callback, optionalThisObject) {

    var filterCallback = callback;

    if (optionalThisObject){
        filterCallback = callback.bind(optionalThisObject);
    };

    var filteredArray = []

    for (var i = 0; i < originalArray.length; i++){
        if (filterCallback(originalArray[i], i, originalArray)){
            filteredArray.push(originalArray[i])
        };
    };

    return filteredArray;

}