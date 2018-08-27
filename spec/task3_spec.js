const Compare = require("./compare")
describe("Third test suite", function(){
   let res = new Compare();

    it("Compare two given numbers,return true if one of the number is 50 ", function(){
        expect(res.output(50, 5)).toBe(true, "Error: number is not equal to 50");
    });
});
