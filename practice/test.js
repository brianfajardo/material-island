// Testing .forEach()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

var forEach = function(array, callback, optionalThisObject){

    var forEachCallback = callback

    if (optionalThisObject) {
        // Want to bind thisObject to the callback function
        // callback.bind(thisObject) creates a new function, but does not modify the actual callback argument
        forEachCallback = callback.bind(optionalThisObject);
    }

    for (var i = 0; i < array.length; i++){
        forEachCallback(array[i], i, array);
    }
}

// Test 1:
// forEach.([1, 2, 3], function(){
//     console.log('hi');
// });

// Test 2:
// forEach.([1, 2, 3], function(number){
//     console.log(number)
// });

// Test 3:
// forEach.([1, 2, 3], function(number, index){
//     console.log(index)
// });

// Test 4:
// forEach.([1, 2, 3], function(number, index, OriginalArray){
//     console.log(OriginalArray)
// });

// Test 5:
