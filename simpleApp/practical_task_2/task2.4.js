bigger = function (a,b){
    if ( a > b ){
        res = 'a is bigger than b';
    } else if (a == b){
        res = 'a is equal to b';
    }
    else{
        res = 'b is bigger than a';
    }
    return res;
}
console.log(bigger(5,8));