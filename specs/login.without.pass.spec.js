let LoginPage = require("../page_objects/login.page");

describe("Login suite", function(){
    beforeAll(function () {
        browser.restart();
      });

    it("Unsuccessful login without password", async function(){
        let loginPage = new LoginPage();
        

        await loginPage.open();
        await browser.sleep(5000);
        await loginPage.login("anna.shvets@eleks.com", "");
        await browser.sleep(5000);
        expect(loginPage.checkSignInButton()).toBe(false);

    });

});