let LoginPage = require("../../page_objects/login.page");


describe("Login suite", function(){
    beforeAll(function () {
        browser.restart();
      });

   it("Login with incorrect pass", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com", "15HmDL8CYjSTy");
        expect(loginPage.returtErrorToastMessage()).toBe("Login or password is not correct");
    
    });

});