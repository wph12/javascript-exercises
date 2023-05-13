const fibonacci = function(input) {
    let num = parseInt(input);
    if(num){
        if(num < 0){
            return "OOPS"
        }
        else{
            let arr = [];
            arr[0] = 0;
            arr[1] = 1;
            for(let i = 2; i <= num; i++){
                arr[i] = arr[i-1]+arr[i-2];
            }
            return arr[num];
        }
    }
    else{
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
