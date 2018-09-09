let adminButtonLocator = "#navbar li:nth-child(2) a";
let productsButtonLocator = "#navbar li:nth-child(1) a";
let userNameLocator = ".user-data .user-name";

class Header {
    constructor(){
    
        browser.waitForAngularEnabled(false);
    }

    getAdminButton(){
        return element(by.css(adminButtonLocator));
    }
    async clickAdminButton(){
        await this.getAdminButton().click();
    }


    getProductsButton(){
        return element(by.css(productsButtonLocator));
    }
    async clickProductsButton(){
        await this.getAdminButton().click();
    }

    getUserName(){
        return element(by.css(userNameLocator)).getText();
    }

}

module.exports = Header;
