let LoginPage = require("../page_objects/login.page");
let HeaderPage = require("../page_objects/header.page");


describe("Login suite", function(){
    beforeAll(function () {
      browser.restart();
    });

   it("Successful login", async function(){
        let loginPage = new LoginPage();
        let headerPage = new HeaderPage();
        await loginPage.open();
        await browser.sleep(5000);
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await browser.sleep(5000);
        expect(headerPage.returnUserName()).toEqual("Anna Shvets");
    
    });

});