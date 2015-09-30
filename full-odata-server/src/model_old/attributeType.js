var AttributeType = (function () {
    function AttributeType(type, ref) {
        if (ref) {
            this.type = type;
            this.ref = ref;
        }
        else {
            this.type = type;
        }
    }
    return AttributeType;
})();
exports.AttributeType = AttributeType;
