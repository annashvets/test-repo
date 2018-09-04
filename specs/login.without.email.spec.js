let LoginPage = require("../page_objects/login.page");


xdescribe("Login suite", function(){
    it("Unsuccessful login without email", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await browser.sleep(5000);
        await loginPage.login("", "5HmDL8CYjSTy");
        await loginPage.clickSignInnButton();
        await browser.sleep(5000);
        expect(element(by.css('#email + div span')).getText()).toBe("Email is required");
        expect(element(by.css('.iframe-wrap .login-button')).isEnabled()).toBe(false, "Error - sign in button is enabled");

    });

});