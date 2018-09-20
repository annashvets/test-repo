let Input = require("../controls/input");
let Button = require("../controls/button");

let addNewProductButtonLocator = ".section__left .form-group a span:nth-child(2)";
let productNameInputLocator = "#product-name";
let productFamilyListLocator = ".product-family-list .dropdown";
let dropDownSearchInputLocator = ".dropdown-menu .form-control";
let dropDownItemLocator = "#change-product-family-list .dropdown-menu li:nth-child(3)";
let saveProductButtonLocator = "#saveProductAdd";
let firstPreviewItemLocator = ".preview-list li:nth-child(1) a";
let sectionLeftSearchLocator = ".section__left .input-group-btn + input";
let deleteButtonLocator = ".section-title__details-actions .gds-delete-icon";
let deleteButtonConfirmLocator = ".gds-confirmation-modal .modal-footer .gds-ml-1";
let noResultsFoundLocator = ".preview-list__header .col-md-12";
let successProductDeletePopupLocator = "#toast-container .toast-message";


let EC = protractor.ExpectedConditions;
let waiter = $(".section__left .form-group a span:nth-child(2)");
let isClickable = EC.elementToBeClickable(waiter);


class AdminPage{
    constructor(){ 
   
    }

    getSuccessProductDeletePopup(){
        browser.wait(EC.visibilityOf($('#toast-container .toast-message')), 5000);
        return new Button(element(by.css(successProductDeletePopupLocator)), "Success product delete popup message");
    }

    getNoResultsFound(){
        return new Button(element(by.css(noResultsFoundLocator)), "No results found - products search result");
    }

    getDeleteButtonConfirm(){
        return new Button(element(by.css(deleteButtonConfirmLocator)), "Delete product button on confirmation message");
    }

    getAddNewProductButton(){
        return new Button(element(by.css(addNewProductButtonLocator)), "Add new product button");
    }
    getProductNameInput(){
        return new Input(element(by.css(productNameInputLocator)), "Name input");
    }
    getProductFamilyList(){
        return new Button(element(by.css(productFamilyListLocator)), "Family list drop-down");
    }
    getdropDownSearchInput(){
        return new Input(element(by.css(dropDownSearchInputLocator)), "Search input");
    }

    getDropDownItem(){
        return new Button(element(by.css(dropDownItemLocator)), "Drop-down item");
    }
    getSaveProductButton(){
        return new Button(element(by.css(saveProductButtonLocator)), "Save button");
    }
    getFirstPreviewItem(){  
        return new Button(element(by.css(firstPreviewItemLocator)), "Get first preview item");
    }

    getSectionLeftSearch(){
        browser.wait(EC.elementToBeClickable($('.section__left .input-group-btn + input')), 5000);
        return new Input(element(by.css(sectionLeftSearchLocator)), "Get left search input");
    }
    
    getDeleteButton(){
        return new Button(element(by.css(deleteButtonLocator)), "Delete product button")
    }
    
    returnNoResultsFound(){
        return this.getNoResultsFound().getText();
    }

    returnFirstPreviewItem(){
       browser.ignoreSynchronization = true
       browser.wait(EC.textToBePresentInElement($(".preview-list li:nth-child(1) a"), 'AnnaShvetsProduct'), 5000);
       return this.getFirstPreviewItem().getText();
    }

    returnSuccessProductDeletePopup(){
        return this.getSuccessProductDeletePopup().getText();
    }

    async enterProductName(productName){
      await this.getProductNameInput().sendKeys(productName);
    }

    async clickAddNewProductButton(){
        await browser.wait(isClickable, 5000);
        await allure.createStep("Click on 'Add new product' button", async() => await this.getAddNewProductButton().click())();
    }

    async clickProductFamilyList(){
        await browser.wait(isClickable, 5000);
        await allure.createStep("Open 'Product family' drop-down list", async() => await this.getProductFamilyList().click())();
    }

    async selectDropDownItem(){
        await allure.createStep("Select drop-down item", async() => await this.getDropDownItem().click())();
    }
    async clickSaveProductButton(){
        await allure.createStep("Click on 'Save' button", async() => await this.getSaveProductButton().click())();
    }

    async selectFirstPreviewItem(){
        await browser.wait(EC.textToBePresentInElement($(".preview-list li:nth-child(1) a"), 'AnnaShvetsProduct'), 5000);
        await allure.createStep("Select created product from the list", async() => await this.getFirstPreviewItem().click())();
    }
    async clickDeleteButton(){

        await allure.createStep("Click on delete button", async() => await this.getDeleteButton().click())();
    }

    async clickDeleteConfirm(){
        await browser.wait(EC.elementToBeClickable($('.gds-confirmation-modal .modal-footer .gds-ml-1')), 5000);
        await allure.createStep("Click on delete button", async() => await this.getDeleteButtonConfirm().click())();
    }


}

module.exports = AdminPage;