let LoginPage = require("../page_objects/login.page");


describe("Login suite", function(){
   it("Successful login", async function(){
        let loginPage = new LoginPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await loginPage.login("anna.shvets@eleks.com1", "15HmDL8CYjSTy");
        await loginPage.clickSignInnButton();
        expect(element(by.css("")).getText()).toEqual("Login or password is not correct");
    
    });

});