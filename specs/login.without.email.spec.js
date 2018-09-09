let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){
    it("Unsuccessful login without email", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await browser.sleep(5000);
        await loginPage.login("", "5HmDL8CYjSTy");
        await loginPage.clickSignInnButton();
        await browser.sleep(5000);
        expect(loginPage.getErrorEmailRequired()).toBe("Email is required");
        expect(loginPage.getSignInButton().isEnabled()).toBe(false, "Error - sign in button is enabled");

    });

});