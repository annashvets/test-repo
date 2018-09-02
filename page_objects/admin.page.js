let HeaderPage = require("./header.page");

let loginButtonLocator = ".login-panel .login-button";

class AdminPage {
    constructor(){
        this.header = new HeaderPage();
        browser.waitForAngularEnabled(false);
    }

   async open(){
     await this.header.navigateToAdminPage();
   }
    
}

module.exports = AdminPage;
