import assert = require('assert');
import chai = require('chai');
var expect = chai.expect;

import attr = require('../../src/model/attribute');
import opt = require('../../src/model/attributeOptions');
import out = require('../../src/model/model');

describe("model/model", () => {

    it("should create an object with name", () => {
        var model = new out.Model("Book");

        expect(model.getName()).to.be.equal("Book");
    });

    it("should create an object with name and empty attributes", () => {
        var model = new out.Model("Book");

        expect(model.getAttributes().length).to.be.equal(0);
    });

    it("should add one attribute", () => {
        var model = new out.Model("Book");
        var options = new opt.AttributeOptions("String");
        var attribute = new attr.Attribute("name", options);

        model.add(attribute);

        expect(model.getAttributes().length).to.be.equal(1);
    });

});
