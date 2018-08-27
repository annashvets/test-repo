exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'firefox',
    },
    onPrepare: function(){
        console.log("Test execution started");
    },
}