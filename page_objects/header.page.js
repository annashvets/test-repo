let adminButtonLocator = ".navbar-nav li:nth-chiled (2) a";

class HeaderPage {
    constructor(){

    }

    getAdminButton(){
        return element(by.css(adminButtonLocator));
    }
   
    async navigateToAdminPage(){
        await this.getAdminButton().click();
    }
    
}

module.exports = HeaderPage;