let LoginPage = require("../page_objects/login.page");


xdescribe("Login suite", function(){
    it("Unsuccessful login without credentials", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("", "");
        await browser.sleep(5000);

        expect(loginPage.getSignInButton().isEnabled()).toBe(false, "Error - sign in button is enabled");

    });

});