var AttributeOptions = (function () {
    function AttributeOptions(type, ref) {
        this.ref = null;
        this.type = type;
        if (ref)
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
