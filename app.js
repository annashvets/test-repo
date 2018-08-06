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

  function sum(a, b) {
      let c = a + b;
      return c;
  };
  function dif(a, b){
      let c = a - b;
      return c;
  };
  function mul(a, b){
      let c = a * b;
      return c;
  };
  function div(a, b){
      let c;
      if (b > 0){
          c = a / b
      } else {
          c = "The number can't be '0'";
      }
      return c;
  };

function calculate(a, b, op){
  switch (op){
      case `+`:
        console.log(sum(a,b));
        break;
      case `-`:
        console.log(dif(a,b));
        break;
      case `*`:
        console.log(mul(a,b));
        break;
      case `/`:
        console.log(div(a,b));
        break;
      default: console.log("Wrong operation!");

  }
}

calculate(12, 4, "*");




