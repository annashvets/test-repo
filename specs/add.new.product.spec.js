let LoginPage = require("../page_objects/login.page");
let Header = require("../page_objects/header.page");
let AdminPage = require("../page_objects/admin.page");



xdescribe("Add new product", function(){
   it("add new product", async function(){
        let loginPage = new LoginPage();
        let headerPage = new Header();
        let adminPage = new AdminPage();

        await loginPage.open();
        await loginPage.clickLoginButton();
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await loginPage.clickSignInnButton();

        await browser.sleep(5000);

        await headerPage.clickAdminButton();
        await adminPage.clickAddNewProductButton();
        await adminPage.writeProductName("my-test-product");
        await adminPage.clickProductFamilyList();
        await adminPage.writeDropDownSearchInput("test product family");
        await adminPage.selectDropDownItem();
        await adminPage.clickSaveProductButton();

        expect(adminPage.name).toEqual("my-test-product");
    
    });

});