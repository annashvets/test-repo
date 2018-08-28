describe('Protractor Demo App', function(){
    it('should add one and two', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(browser.params.calc.first);
        element(by.model('second')).sendKeys(browser.params.calc.second);
        element(by.id('gobutton')).click();
        expect(element(by.binding('latest')).getText());
        expect(element(by.binding('latest')).getText()).toEqual('5');
    });
});