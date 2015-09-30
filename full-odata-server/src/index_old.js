var router = require('./router_old/odataRouter');
var mongodb = require('./db_old/mongodb');
var versions = require('./odata_old/odataversions');
var model = require('./model_old/model');
var ODataServer = (function () {
    function ODataServer() {
        this.init();
    }
    ODataServer.prototype.init = function () {
        this.models = [];
    };
    ODataServer.prototype.setVersion = function (version) {
        this.odataVersion = versions.ODataVersions.Create(version);
    };
    ODataServer.prototype.setMongoDb = function (dbUrl) {
        this.db = new mongodb.MongoDB(dbUrl);
    };
    ODataServer.prototype.addModel = function (name, attributes) {
        this.models.push(new model.Model(name, attributes));
    };
    ODataServer.prototype.getModels = function () {
        return this.models;
    };
    ODataServer.prototype.getRouter = function () {
        this.router = new router.ODataRouter(this);
        return this.router.getRouter();
    };
    return ODataServer;
})();
exports.ODataServer = ODataServer;
