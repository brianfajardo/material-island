// Testing .forEach()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

var testArray = [1, 2, 3]

var forEach = function(array, callback){
    for (var i = 0; i < array.length; i++){
        callback(array[i], i, array);
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