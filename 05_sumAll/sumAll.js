const sumAll = function(a,b) {
    if( !Number.isInteger(a)|| !Number.isInteger(b)){
        return "ERROR"
    }

    if(a < 0 || b < 0){
        return "ERROR"
    }

    let low = 0, high = 0;

    if (a === b){
        return a;
    }
    else if (a < b){
        low = a;
        high = b;
    }
    else {
        low = b;
        high = a;
    }
 
    let sum = 0
    for(i = low; i <= high; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
