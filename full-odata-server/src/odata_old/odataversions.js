var v1 = require('./odataV1');
var v2 = require('./odataV2');
var v3 = require('./odataV3');
var v4 = require('./odataV4');
var ODataVersions = (function () {
    function ODataVersions() {
    }
    ODataVersions.Create = function (version) {
        switch (version) {
            case 1:
                return new v1.ODataV1();
            case 2:
                return new v2.ODataV2();
            case 3:
                return new v3.ODataV3();
            case 4:
                return new v4.ODataV4();
            default:
                break;
        }
    };
    return ODataVersions;
})();
exports.ODataVersions = ODataVersions;
