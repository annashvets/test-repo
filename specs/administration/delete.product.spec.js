let LoginPage = require("../../page_objects/login.page");
let Header = require("../../page_objects/header.page");
let AdminPage = require("../../page_objects/admin.page");

describe("Admin page suite", function(){

    beforeAll(function () {
        console.log("restarting browser");
        browser.restart();
        console.log("complete restart");
      });

   it("Delete product", async function(){
        let loginPage = new LoginPage();
        let headerPage = new Header();
        let adminPage = new AdminPage();
        let productName = "AnnaShvetsProduct";


        await loginPage.open();
        await loginPage.login("anna.shvets@eleks.com", "5HmDL8CYjSTy");
        await headerPage.clickAdminButton();
        await adminPage.getSectionLeftSearch().sendKeys(`${productName}`);
        await adminPage.selectFirstPreviewItem();
        await adminPage.clickDeleteButton();
        await adminPage.clickDeleteConfirm();

        expect(adminPage.returnSuccessProductDeletePopup()).toEqual(`Product ${productName} successfully deleted`, "No popup message is displayed");
        expect(adminPage.returnNoResultsFound()).toEqual("No Results Found");



    });

});