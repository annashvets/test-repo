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
  }); */

// Task 1

let a = 5;
let b = 15;
console.log(a + b);


// Task 2

let a = 'string for automation courses';
console.log('Test_' + a);


// Task 3

let firstname = 'anna ';
let lastname = 'shvets ';
let age = 25;
console.log(firstname + lastname + age);


// Task 4

let a = 101;
console.log(a>100);
console.log('integer is bigger then 100');


// Task 5

let a = 3;
let b = 5;
console.log(10 > a && 10 > b);


// Task 6

let a = 50;
let b = 10;

console.log(a == 50 || b == 50);

if (a == 50 || b == 50)
{
    console.log('result - true');
} else {
console.log(a+b == 50);
}


// Task 7

let a = 24;
console.log(a%3 == 0);
console.log(a%7 == 0);