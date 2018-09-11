let Input = require("../controls/input");
let Button = require("../controls/button");

let adminButtonLocator = "#navbar li:nth-child(2) a";
let productsButtonLocator = "#navbar li:nth-child(1) a";
let userNameLocator = ".user-data .user-name";

class Header {
    constructor(){
    
        browser.waitForAngularEnabled(false);
    }

    getAdminButton(){
        return new Button(element(by.css(adminButtonLocator)),"Administartion button");
    }
    getProductsButton(){
        return element(by.css(productsButtonLocator));
    }
    getUserName(){
        return element(by.css(userNameLocator));
    }
    async clickAdminButton(){
        await allure.createStep("Click on Administration button", async() => await this.getAdminButton().click())();
    }

    async clickProductsButton(){
        await this.getAdminButton().click();
    }

   

}

module.exports = Header;
