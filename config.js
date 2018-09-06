
exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'firefox'
    },
    specs: ['./specs/*.spec.js'],
  
    jasmineNodeOpts: {
      showColors: true,
    },
    framework: 'jasmine2',
    onPrepare: function () {
      var AllureReporter = require('./node_modules/jasmine-allure-reporter/index');
      //allure report
      jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
      }));
    }
  };