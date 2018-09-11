let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){
    it("Unsuccessful login without email", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("", "5HmDL8CYjSTy");
        await browser.sleep(5000);
        expect(loginPage.getErrorEmailRequired().getText()).toBe("Email is required");
        await browser.sleep(5000);
        expect(loginPage.getSignInButton().isEnabled()).toEqual(false);

    });

});