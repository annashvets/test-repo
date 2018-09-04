let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){
   it("Successful login", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await loginPage.clickSignInnButton();
        expect(element(by.css(".user-data .user-name")).getText()).toEqual("Anna Shvets");
    
    });

});