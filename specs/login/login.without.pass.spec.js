let LoginPage = require("../../page_objects/login.page");

describe("Login suite", function(){
    beforeAll(function () {
        browser.restart();
      });

    it("Unsuccessful login without password", async function(){
        let loginPage = new LoginPage();
        

        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com", "");
        expect(loginPage.checkSignInButton()).toBe(false);

    });

});