
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['./specs/*.spec.js'],
  
    jasmineNodeOpts: {
      showColors: true,
    },
    onPrepare: function(){
        let AllureReporter = require('./node_modules/jasmine-allure-reporter/index');
        jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'}));
    }
    
  };