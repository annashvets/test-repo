let Input = require("../controls/input");
let Button = require("../controls/button");

let addNewProductButtonLocator = ".section__left .form-group a span:nth-child(2)";
let productNameInputLocator = "#product-name";
let productFamilyListLocator = ".product-family-list .dropdown";
let dropDownSearchInputLocator = ".dropdown-menu .form-control";
let dropDownItemLocator = "#change-product-family-list .dropdown-menu li:nth-child(3)";
let saveProductButtonLocator = "#saveProductAdd";
let firstPreviewItemLocator = ".preview-list li:nth-child(1) a";


let EC = protractor.ExpectedConditions;
let waiter = $(".section__left .form-group a span:nth-child(2)");
let isClickable = EC.elementToBeClickable(waiter);


class AdminPage{
    constructor(){ 
   
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
    
    returnFirstPreviewItem(){
       return this.getFirstPreviewItem().getText();
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

}

module.exports = AdminPage;