class Calculator {
    constructor(result){
        this.result = result;
    }
    sum(a, b){
        return a + b;
    }
    dif(a, b){
        return a - b;
    };
    mul(a, b){
        return a * b;
    };
    div(a, b){
        let c;
        if (b > 0){
          return a / b;
        } else {
          return "The number can't be '0'";
        }
    };
  
}

module.exports = Calculator;




