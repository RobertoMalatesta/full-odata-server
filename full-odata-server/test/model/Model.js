var chai = require('chai');
var expect = chai.expect;
var attr = require('../../src/model/attribute');
var opt = require('../../src/model/attributeOptions');
var out = require('../../src/model/model');
describe("model/model", function () {
    it("should create an object with name", function () {
        var model = new out.Model("Book");
        expect(model.getName()).to.be.equal("Book");
    });
    it("should create an object with name and empty attributes", function () {
        var model = new out.Model("Book");
        expect(model.getAttributes().length).to.be.equal(0);
    });
    it("should add one attribute", function () {
        var model = new out.Model("Book");
        var options = new opt.AttributeOptions("String");
        var attribute = new attr.Attribute("name", options);
        model.add(attribute);
        expect(model.getAttributes().length).to.be.equal(1);
    });
});
