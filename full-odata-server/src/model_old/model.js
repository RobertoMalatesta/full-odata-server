var attr = require('./attribute');
var Model = (function () {
    function Model(name, attributes) {
        this.name = name;
        this.initAttributes(attributes);
    }
    Model.prototype.initAttributes = function (attributes) {
        this.attributes = [];
        for (var attribute in attributes) {
            this.attributes.push(new attr.Attribute(attribute, attributes[attribute]));
        }
    };
    return Model;
})();
exports.Model = Model;
