import assert = require('assert');
import chai = require('chai');
var expect = chai.expect;
import out = require('../src/model/attributeOptions');

describe("model attributeOptions", () => {
    
    it("should create an object with type and reference", () => {
        var ao = new out.AttributeOptions("Array", "Book");

        expect(ao.getType()).equal("Array");
        expect(ao.getRef()).equal("Book");
    });

    it("should create an object with type and empty reference", () => {
        var ao = new out.AttributeOptions("String");

        expect(ao.getType()).equal("String");
        expect(ao.getRef()).is.empty;
    });
});
