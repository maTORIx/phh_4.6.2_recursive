function factorial(n) {
    if(n != 0) { return n * factorial(n-1);}
    return 1;
}

function factorial2(n){
    var result = 1;
    for(var i = 2; i <= n ;i++) {
        result = result * i;
    }
    return result;
}

console.log(factorial(3));
console.log(factorial2(3));
