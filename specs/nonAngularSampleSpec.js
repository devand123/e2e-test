describe("googleSearch Test", function() {

    var page = require("../pageObjects/nonAngularPageObjectSample.js");

    beforeEach(function() {
    	isAngularSite(false);
        page.go("http://www.google.com");
    });

    it("should", function() {
        page.search("Santiago Esteva");
        expect(true).toBe(true);
        
    });
});
