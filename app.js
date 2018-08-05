/* console.log("\nNice work! Your first application have been launched.");
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

let str = 'Test task 1';
function verible() {
 let a = str.indexOf("k");
return a;
}
let res = verible();
console.log(`letter is found - ${res}`);



// Task 2

let str1 = "";

function check (){
    let a = str1.length;
    return a;
}
let res1 = check();
console.log(`String length is ${res1} symbols`);


// Task 3

abbrev = function (str){
    let a = str.split(" ");
    let res1 = a[0].charAt(0);
    let res2 = a[1].charAt(0);
    let res = res1 + "." + res2 + ".";
    return res;
}

console.log(abbrev(`Anna Shvets`));


// Task 4

bigger = function (a,b){
    if ( a > b ){
        res = 'a is bigger than b';
    } else if (a == b){
        res = 'a is equal to b';
    }
    else{
        res = 'b is bigger than a';
    }
    return res;
}
console.log(bigger(5,8));


// Task 5

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
