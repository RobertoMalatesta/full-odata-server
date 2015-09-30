import assert = require('assert');
import chai = require('chai');
var expect = chai.expect;

import opt = require('../../src/model/attributeOptions');
import out = require('../../src/model/attribute');

describe("model/attribute", () => {

    it("should create an object with name and attributeOptions", () => {
        var options = new opt.AttributeOptions("String");
        var ao = new out.Attribute("name", options);

        expect(ao.getName()).to.be.equal("name");
        expect(ao.getOptions()).to.be.equal(options);
    });

});
