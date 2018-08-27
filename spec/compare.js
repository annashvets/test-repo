class Compare{
    constructor(result){
        this.result = result
    };

    output(a, b){
        if (a == 50 || b == 50){
            return true
        } else if (a + b == 50){
            return true
        } else {
            return false
        };
    };

};

module.exports = Compare;

//let res = new Compare ();
//console.log(res.output(50, 5));