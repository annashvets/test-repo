exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'firefox',
    },
    params: {
        calc: {
          first: 1,
          second: 2
        }
      },
      onPrepare: function(){
        console.log("Test execution started");
    },
}