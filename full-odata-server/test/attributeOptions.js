var chai = require('chai');
var expect = chai.expect;
var out = require('../src/model/attributeOptions');
describe("model attributeOptions", function () {
    it("should create an object with type and reference", function () {
        var ao = new out.AttributeOptions("Array", "Book");
        expect(ao.getType()).equal("Array");
        expect(ao.getRef()).equal("Book");
    });
    it("should create an object with type and empty reference", function () {
        var ao = new out.AttributeOptions("String");
        expect(ao.getType()).equal("String");
        expect(ao.getRef()).is.empty;
    });
});
