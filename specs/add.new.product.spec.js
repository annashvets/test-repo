let LoginPage = require("../page_objects/login.page");
let Header = require("../page_objects/header.page");
let AdminPage = require("../page_objects/admin.page");



describe("Admin page suite", function(){

   it("Add new product TC", async function(){
        let loginPage = new LoginPage();
        let headerPage = new Header();
        let adminPage = new AdminPage();

        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await browser.sleep(5000);

        await headerPage.clickAdminButton();
        await browser.sleep(5000);
        await adminPage.clickAddNewProductButton();
        await browser.sleep(5000);
        await adminPage.getProductNameInput().sendKeys("my-test-product8");
        await browser.sleep(5000);
        await adminPage.clickProductFamilyList();
        await browser.sleep(5000);
        await adminPage.getdropDownSearchInput().sendKeys("test product family");
        await browser.sleep(5000);
        await adminPage.selectDropDownItem();
        await browser.sleep(5000);
        await adminPage.clickSaveProductButton();
        await browser.sleep(2000);
        expect(adminPage.getFirstPreviewItem().getText()).toEqual("my-test-product8");
    
    });

});