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
        return element(by.css(loginButtonLocator));
    }
    async clickLoginButton(){
        await  this.getLoginButton().click();
    }

    getErrorEmailRequired(){
        return element(by.css(errorEmailRequiredLocator)).getText();
    }

    getEmailInput(){
        return element(by.css(emailInputLocator));
    }
    getPassInput(){
        return element(by.css(passInputLocator));
    }
    async login(email, pass){
        await this.getEmailInput().sendKeys(email);
        await this.getPassInput().sendKeys(pass);
    }


    getSignInButton(){
        return element(by.css(signInButtonLocator));
    }
    async clickSignInnButton(){
        await  this.getSignInButton().click();
    }


    getErrorToastMessage(){
        return element(by.css(errorToastMessageLocator)).getText();
    }

}


module.exports = LoginPage;