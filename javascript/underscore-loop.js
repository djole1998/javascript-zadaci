_.each([1,2,3], function (value,index,list) {
    console.log(value);
    console.log(index)
})


var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function (arr, val) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return true;
        }
    }
    return false;
}

checkValue (helloArr,'bye');


var checkValue = function(arr, val){
    result = false;
    _.each(arr, function(v){
        if(v === val){
            result = true;
        }
    });
    return result;
}

checkValue(helloArr, 'bonjour');


var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, function (val, prop, obj) {
    return val;
})
console.log(myNums);

_.filter({two: 2, four: 4, three: 3, twelve: 12}, function(val){
        return val%2 === 0
})