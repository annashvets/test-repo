let LoginPage = require("../page_objects/login.page");

describe("Login suite", function(){
    it("Unsuccessful login without password", async function(){
        let loginPage = new LoginPage();
        

        await loginPage.open();
        await loginPage.clickLoginButton();
        await browser.sleep(5000);
        await loginPage.login("anna.shvets@eleks.com", "");
        await browser.sleep(5000);
        await loginPage.clickSignInnButton();
        await browser.sleep(5000);
        
        expect(loginPage.getSignInButton().isEnabled()).toBe(false, "Error - sign in button is enabled");

    });

});