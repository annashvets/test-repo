const Calculator = require("./calculator");

describe("Calculator test suite", function(){
    let a, b;
    let res = new Calculator();
    beforeEach(function(){
        a = Math.floor((Math.random() * 100) + 1);
        b = Math.floor((Math.random() * 100) + 1);
    });
    it("Sum of two numbers", function (){
        expect(res.sum(a, b)).toBe(a + b);
    });
    it("Dif of two numbers", function(){
        expect(res.dif(a, b)).toBe(a - b);
    });
    it("Mul of two numbers", function(){
        expect(res.mul(a, b)).toBe(a * b);
    });
    it("Div of two numbers", function(){
        expect(res.div(a,b)).toBe(a / b, "You can't divide on 0");
    });
});