var AttributeOptions = (function () {
    function AttributeOptions(type, ref) {
        this.type = type;
        this.ref = ref;
    }
    AttributeOptions.prototype.getType = function () {
        return this.type;
    };
    AttributeOptions.prototype.getRef = function () {
        return this.ref;
    };
    return AttributeOptions;
})();
exports.AttributeOptions = AttributeOptions;
