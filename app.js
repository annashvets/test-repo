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

  //Task 1

  console.log(`1 step`);
  console.log(`2 step`);


  setTimeout(() => {
      console.log(`3 step`);
  }, 3000)

  console.log(`4 step`);
// output:
//1 step
//2 step
//4 step
//3 step

  //Task 2
  console.log(`1 step`);
  console.log(`2 step`);

  new Promise((resolve, reject) => setTimeout(() => {
      console.log(`3 step`);
      resolve();
  },3000)).then(() => {
      console.log(`4 step`);
  });

// output:
//1 step
//2 step
//3 step
//4 step

console.log(" ");
console.log(" ");

  //Task3

  Promise.all([
      new Promise((resolve, reject) => setTimeout (() => resolve(1), 3000)),
      new Promise((resolve, reject) => setTimeout (() => resolve(2), 2000)),
      new Promise((resolve, reject) => setTimeout (() => resolve(3), 1000))
  ]).then((results) => {
      console.log(results[0]);
      console.log(results[2]);
  });
  
// output:
// 1
// 3

  //Task4

  function login(email, pass) {
      emailInput.sendKeys(email).then(() => {
          passwordInput.sendKeys(pass).then(() => {
              loginButton.click()
          })
      });
  }

async function login(email, pass) {
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(pass);
    await loginButton.click();
}
