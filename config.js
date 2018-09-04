
exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['./specs/*.spec.js'],
  
    jasmineNodeOpts: {
      showColors: true,
    },
    onPrepare: function(){
        console.log("Test execution started");
    }
  };