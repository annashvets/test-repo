let Input = require("../controls/input");
let Button = require("../controls/button");

let adminButtonLocator = "#navbar li:nth-child(2) a";
let productsButtonLocator = "#navbar li:nth-child(1) a";
let userNameLocator = ".user-data .user-name";

let EC = protractor.ExpectedConditions;


class Header {
    constructor(){
    
    }

    getAdminButton(){
        return new Button(element(by.css(adminButtonLocator)),"Administration button");
    }
    getProductsButton(){
        return element(by.css(productsButtonLocator));
    }
    getUserName(){
        return new Button(element(by.css(userNameLocator)), "Get user name");
    }
 
    async waitForPageToBeavailable(){
        let waiter = $("#navbar li:nth-child(2) a");
        let isClickable = EC.elementToBeClickable(waiter);
        await browser.wait(isClickable, 5000);
    }

    async returnUserName(){
        await this.waitForPageToBeavailable();
        await allure.createStep("Checking user name", async() => await this.getUserName().getText())();
    }

    async clickAdminButton(){
        await browser.waitForAngularEnabled(false);
        await this.waitForPageToBeavailable();
        await allure.createStep("Click on Administration button", async() => await this.getAdminButton().click())();
    }

    async clickProductsButton(){
        await this.getAdminButton().click();
    }

   

}

module.exports = Header;