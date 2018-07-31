// Write a JavaScript function with conditional statement to sort three numbers.


sort = function(a, b, c){
    if (a > b && a < c) {
        res = [b, a, c];
    } else if (a < b && a > c){
        res = [c, a, b];
    } else if (a < b && a < c){
        if (b < c){
            res = [a, b, c];  
        } else {
            res = [a, c, b];
        }
    } else if (a > b && a > c){
        if (b > c){
            res = [c, b, a];
        } else {
            res = [b, c, a];
        }
    }
return res;
}
console.log(sort(-3, -5, -2));
