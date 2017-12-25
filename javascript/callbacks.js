var Toaster = function () {
    var maxTemp = 500;
    var temp = 0;
    return {
        setTemp: function (newTemp) {
            if (newTemp > maxTemp) {
                console.log ('This temp is too high!');
            } else {
                temp = newTemp;
            }
        }
    };
};

var myToaster = Toaster();
myToaster.setTemp(300);




var funcCaller = function (func, arg){
    return func(arg);
};


var firstVal = function (arr, func){
    func(arr[0], 0, arr);
};



firstVal = function (list, func){
    if(Array.isArray(list)){
       func(arr[0], 0, arr);
    } else {
        /*for(var k in list){
            return func(list[k], k , list);
        }*/
       var propArr =  Object.keys(list);
       func(list[propArr[0]], propArr[0], list)
    }
}

