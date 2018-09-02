let loginPage = require("../page_objects/login.page")


describe('angularjs homepage', function() {
    it('should greet the named user', async function() {
        let loginPage = new LoginPage();
    
      await loginPage.open();
      await browser.sleep(5000);
      await loginPage.clickLoginButton();
      await browser.sleep(5000);
     let adminPage = await loginPage.login("username","password");
     await browser.sleep(5000);
     await adminPage.open();
     await browser.sleep(5000);





      // Find the element with ng-model matching 'yourName' - this will
      // find the <input type="text" ng-model="yourName"/> element - and then
      // type 'Julie' into it.
     // element(by.model('yourName')).sendKeys('Julie');
  
      // Find the element with binding matching 'yourName' - this will
      // find the <h1>Hello {{yourName}}!</h1> element.
      //var greeting = element(by.binding('yourName'));
  
      // Assert that the text element has the expected value.
      // Protractor patches 'expect' to understand promises.
  
      //expect(greeting.getText()).toEqual('Hello Julie!');
    });
  });
  