let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){
   it("Login with incorrect email", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com1", "5HmDL8CYjSTy");
        expect(loginPage.getErrorToastMessage().getText()).toBe("Login or password is not correct");
    
    });

});