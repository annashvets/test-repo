let LoginPage = require("../../page_objects/login.page");


describe("Login suite", function(){

    beforeAll(function () {
        browser.restart();
      }); 

    it("Unsuccessful login without email", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("", "5HmDL8CYjSTy");
        expect(loginPage.returnErrorEmailRequired()).toBe("Email is required");
        expect(loginPage.checkSignInButton()).toEqual(false);

    });

});