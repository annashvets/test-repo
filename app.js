/*console.log("\nNice work! Your first application have been launched.");
console.log("Now, I need to know your name, type it below: ");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if(txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2018. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`); 
    }   
  });*/


// Task 1
//Write a JavaScript function to get the last element of an array

let mass = [5, 10, 25, 45, 100];

function last(){
    let lastelement = mass.pop();
    return lastelement;
}
 console.log(last());



// Task 2
/* Write a simple JavaScript program to join all elements of the following
array into a string */

let mass = ['one', 'two', 'tree', 'four'];
console.log(mass.join());


// Task 3
/* There are two arrays with individual values, write a JavaScript program
to compute the sum of each individual index value from the given arrays
and save them to third array */

let mass1 = [5, 7, 13];
let mass2 = [7, 9, 11];
let sum = [];

for ( i = 0; i < mass1.length; i++ )
{
    sum[i] = mass1[i] + mass2[i]
}
console.log(sum);


// Task 4
/* Write a JavaScript program to calculate the area and perimeter of a
rectangle. Rectangle should be an object with properties width and
height and methods getArea() and getPerimeter(); */

let rectangle = {
    width: 15,
    height: 5,
    getArea: function() {return this.width * this.height;},
    getPerimeter: function() {return 2*(this.width + this.height);} 
    } 
    console.log(`Rectangle area - ${rectangle.getArea()}`);
    console.log(`Rectangle perimeter - ${rectangle.getPerimeter()}`);
