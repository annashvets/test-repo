let LoginPage = require("../page_objects/login.page");
let Header = require("../page_objects/header.page");
let AdminPage = require("../page_objects/admin.page");

describe("Admin page suite", function(){

    /*beforeAll(function () {
        console.log("restarting browser");
        browser.restart();
        console.log("complete restart");
      });*/

   it("Add new product TC", async function(){
        let loginPage = new LoginPage();
        let headerPage = new Header();
        let adminPage = new AdminPage();

        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await headerPage.clickAdminButton();  
        await adminPage.clickAddNewProductButton();
        
        await adminPage.getProductNameInput().sendKeys("my-test-product9");
        await adminPage.clickProductFamilyList();
        await adminPage.getdropDownSearchInput().sendKeys("test product family");
        await adminPage.selectDropDownItem();
        await adminPage.clickSaveProductButton();
    
        expect(adminPage.returnFirstPreviewItem()).toEqual("my-test-product9");
    
    });

});