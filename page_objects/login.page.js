let AdminPage = require("./admin.page");

let loginButtonLocator = ".login-panel .login-button";
let emailInputLocator = "#email";
let passInputLocator = "#userPassword";
let signInButtonLocator = ".iframe-wrap .login-button";

class LoginPage {
    constructor(){

    }

    getLoginButton(){
        return element(by.css(loginButtonLocator));
    }

    getEmailInput(){
        return element(by.css(emailInputLocator));
    }

    getPassInput(){
        return element(by.css(passInputLocator));
    }

    getSignInButton(){
        return element(by.css(signInButtonLocator));
    }

    async open(){
        await browser.get('http://eds_university.eleks.com/');
    }

    async clickLoginButton(){
        await  this.getLoginButton().click();
    }

    async login(email, pass){
        await this.getEmailInput().sendKeys(email);
        await this.getPassInput().sendKeys(pass);
        await this.getSignInButton().click();
        
        return new AdminPage();
    }
}


module.exports = LoginPage;