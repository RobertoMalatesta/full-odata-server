var chai = require('chai');
var expect = chai.expect;
var opt = require('../../src/model/attributeOptions');
var out = require('../../src/model/attribute');
describe("model/attribute", function () {
    it("should create an object with name and attributeOptions", function () {
        var options = new opt.AttributeOptions("String");
        var ao = new out.Attribute("name", options);
        expect(ao.getName()).to.be.equal("name");
        expect(ao.getOptions()).to.be.equal(options);
    });
});
