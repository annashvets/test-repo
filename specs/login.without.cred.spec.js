let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){

    beforeAll(function () {
        browser.restart();
      });

    it("Unsuccessful login without credentials", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("", "");

        expect(loginPage.checkSignInButton()).toBe(false);

    });

});