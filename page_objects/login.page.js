let Input = require("../controls/input");
let Button = require("../controls/button");

let loginButtonLocator = ".panel-body .login-button";
let emailInputLocator = "#email";
let passInputLocator = "#userPassword";
let signInButtonLocator = ".iframe-wrap .login-button";
let errorToastMessageLocator = ".toast .toast-message";
let errorEmailRequiredLocator = "#email + div span";
//let errorPassRewuiredLocator = "#userPassword + div span";


class LoginPage{
    constructor(){

    }

    async open(){
      await browser.get('http://eds_university.eleks.com/');
    }
    
    getLoginButton(){
        return new Button(element(by.css(loginButtonLocator)), "Login button");
    }
    getEmailInput(){
        return new Input(element(by.css(emailInputLocator)), "Email input");
    }
    getPassInput(){
        return new Input(element(by.css(passInputLocator)), "Password input");
    }

    getSignInButton(){
        return new Button(element(by.css(signInButtonLocator)), "Sign in button");
    }

    getErrorEmailRequired(){
        return element(by.css(errorEmailRequiredLocator));
    }

    getErrorToastMessage(){
        return element(by.css(errorToastMessageLocator));
    }

    async login(email, pass){
        await allure.createStep("Click on Login button", async() => await this.getLoginButton().click())();
        await allure.createStep(`Enter email ${email}`, async() => await this.getEmailInput().sendKeys(email))();
        await allure.createStep(`Enter pass ${pass}`, async() => await this.getPassInput().sendKeys(pass))();
        await allure.createStep("Click on Sign in button", async() => await this.getSignInButton().click())();
    }   


}

module.exports = LoginPage;