let LoginPage = require("../page_objects/login.page");
let HeaderPage = require("../page_objects/header.page");


describe("Login suite", function(){
    beforeAll(function () {
     console.log("restarting browser");
       browser.restart();
   });

   it("Successful login", async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
        await loginPage.open();
   
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        expect(headerPage.returnUserName()).toEqual("Anna Shvets");
    
    });

});