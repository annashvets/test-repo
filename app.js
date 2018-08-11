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

  const LoginPage = require("./loginPage");
  const HomePage = require("./homePage");

  let loginPage = new LoginPage ("loginPage");
  loginPage.login('TestUser', 'Passw0rd');

  let homePage = new HomePage ("homePage");
  homePage.UserInfo("administartor");

