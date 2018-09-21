let LoginPage = require("../../page_objects/login.page");
let Header = require("../../page_objects/header.page");
let AdminPage = require("../../page_objects/admin.page");

xdescribe("Admin page suite", function(){

    beforeAll(async function () {
        console.log("restarting browser");
        await browser.restart();
        console.log("complete restart");
      });

   it("Edit product", async function(){
        let loginPage = new LoginPage();
        let headerPage = new Header();
        let adminPage = new AdminPage();
        let productName = "AnnaShvetsProduct";


        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await headerPage.clickAdminButton();
        await adminPage.getSectionLeftSearch().sendKeys(`${productName}`);
        await adminPage.selectFirstPreviewItem();

        await adminPage.clickEditButton();
        await adminPage.enterProductName("edit");
        
        await adminPage.clickProductFamilyList();
        
        await adminPage.selectDropDownItem();
       
        await adminPage.clickSaveProductButton();
      
        expect(adminPage.getSuccessProductEditPopup()).toEqual(`Product ${productName}edit successfully deleted`, "No popup message is displayed");
        expect(adminPage.returnFirstPreviewItem()).toEqual(`${productName}edit`);



    });

});