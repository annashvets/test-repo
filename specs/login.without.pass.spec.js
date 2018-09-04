let LoginPage = require("../page_objects/login.page");

xdescribe("Login suite", function(){
    it("Unsuccessful login without password", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await browser.sleep(5000);
        await loginPage.login("anna.shvets@eleks.com", "");
        await browser.sleep(5000);
        await loginPage.clickSignInnButton();
        await browser.sleep(5000);
        
        expect(element(by.css('.iframe-wrap .login-button')).isEnabled()).toBe(false, "Error - sign in button is enabled");

    });

});