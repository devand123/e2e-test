var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    load: function() {
        return browser.driver.get();
    },

    search: function(param) {
        browser.driver.findElement(by.id('lst-ib')).sendKeys(param);
        return browser.driver.sleep(3000);
    }

});
