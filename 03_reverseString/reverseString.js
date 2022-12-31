const reverseString = function(str) {
    let arr = str.split("");
    let n = arr.length;
    let arr2 = [];
    for(i = 0; i < n; i++){
        arr2[i] = arr[n-i-1];
    }
    return arr2.join("");
};

// Do not edit below this line
module.exports = reverseString;
