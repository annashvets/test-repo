let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){
    it("Unsuccessful login without credentials", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await loginPage.clickSignInnButton();

        expect(element(by.css('.iframe-wrap .login-button')).isEnabled()).toBe(false, "Error - sign in button is enabled");

    });

});