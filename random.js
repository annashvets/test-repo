//Task2 Random string
//Create js program which will provide you a string with a defined length

const randomstring = require('randomstring');

randomstring.generate({
    length: 10
});

console.log("Task 2 - ramdom string");
console.log(randomstring.generate());



// Random number
//Create js program which will provide you a string with a defined length*/


let number = Math.floor((Math.random() * 100)+ 1);
console.log(number);

