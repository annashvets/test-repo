
let AllureReporter = require('jasmine-allure-reporter');

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['./specs/*.spec.js'],
  
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 120000
    },

    //restartBrowserBetweenTests: true,

    onPrepare: function() {
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));

      jasmine.getEnv().afterEach(async () => {
        let screen = await browser.takeScreenshot();
        await allure.createAttachment("Screenshot", () => {
          return new Buffer(screen, "base64")
        }, `image/png`)();

      });
    }
  
}
