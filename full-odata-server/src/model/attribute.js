var Attribute = (function () {
    function Attribute(name, options) {
        this.name = name;
        this.options = options;
    }
    Attribute.prototype.getName = function () {
        return this.name;
    };
    Attribute.prototype.getOptions = function () {
        return this.options;
    };
    return Attribute;
})();
exports.Attribute = Attribute;
