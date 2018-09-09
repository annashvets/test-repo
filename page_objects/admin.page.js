let addNewProductButtonLocator = ".section__left .form-group a span:nth-child(2)";
let productNameInputLocator = "#product-name";
let productFamilyListLocator = ".product-family-list .dropdown";
let dropDownSearchInputLocator = ".dropdown-menu .form-control";
let dropDownItemLocator = "#change-product-family-list .dropdown-menu li:nth-child(3)";
let saveProductButtonLocator = "#saveProductAdd";
let firstPreviewItemLocator = ".preview-list li:nth-child(1) a";



class AdminPage{
    constructor(){
        
    }
    getAddNewProductButton(){
        return element(by.css(addNewProductButtonLocator));
    }
    async clickAddNewProductButton(){
        await this.getAddNewProductButton().click();
    }

    getProductNameInput(){
        return element(by.css(productNameInputLocator));
    }
    getProductFamilyList(){
        return element(by.css(productFamilyListLocator));
    }

    async clickProductFamilyList(){
        await this.getProductFamilyList().click();
    }

    getdropDownSearchInput(){
        return element(by.css(dropDownSearchInputLocator));
    }

    getDropDownItem(){
        return element(by.css(dropDownItemLocator));
    }
    async selectDropDownItem(){
        await this.getDropDownItem().click();
    }

    getSaveProductButton(){
        return element(by.css(saveProductButtonLocator));
    }
    async clickSaveProductButton(){
        await this.getSaveProductButton().click();
    }

    getFirstPreviewItem(){
        return element(by.css(firstPreviewItemLocator)).getText();
    }
}

module.exports = AdminPage;