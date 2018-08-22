let a = 50;
let b = 5;
Compare = {
res: function (a, b){
 if (a == 50 || b == 50)
{
 console.log('result - true');
} else {
 console.log(a+b == 50);
};
}
}

module.exports = Compare;

