
exports.config = {

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    sauceUser: 'jd_devinandrews',
    sauceKey: 'f8d04cf9-2d2c-4b35-bbcd-940f8da479c6',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['specs/nonAngularSampleSpec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function(){
        // If you need to interact with a non-Angular page, you may access the wrapped webdriver instance
        // directly with browser.driver. This is a an alias.
        global.dv = browser.driver;

        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
    }

};
