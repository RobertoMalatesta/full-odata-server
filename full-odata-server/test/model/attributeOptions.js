var chai = require('chai');
var expect = chai.expect;
var out = require('../../src/model/attributeOptions');
describe("model/attributeOptions", function () {
    it("should create an object with type and reference", function () {
        var ao = new out.AttributeOptions("Array", "Book");
        expect(ao.getType()).to.be.equal("Array");
        expect(ao.getRef()).to.be.equal("Book");
    });
    it("should create an object with type and empty reference", function () {
        var ao = new out.AttributeOptions("String");
        expect(ao.getType()).to.be.equal("String");
        expect(ao.getRef()).is.empty;
    });
});
