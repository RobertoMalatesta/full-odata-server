import assert = require('assert');
import chai = require('chai');
var expect = chai.expect;

import out = require('../../src/model/attributeOptions');

describe("model/attributeOptions", () => {
    
    it("should create an object with type and reference", () => {
        var ao = new out.AttributeOptions("Array", "Book");

        expect(ao.getType()).to.be.equal("Array");
        expect(ao.getRef()).to.be.equal("Book");
    });

    it("should create an object with type and empty reference", () => {
        var ao = new out.AttributeOptions("String");

        expect(ao.getType()).to.be.equal("String");
        expect(ao.getRef()).is.empty;
    });
});
