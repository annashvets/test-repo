
it("Compare two given numbers,return true if one of the number is 50 ", function(){
    let c = new Compare (50, 5);
    expect(c.res()).toBe(true, "Error: number is not equal to 50");
});