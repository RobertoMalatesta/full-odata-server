/// <reference path="../def/express.d.ts"/>
var express = require('express');
var ODataRouter = (function () {
    function ODataRouter(odataServer) {
        this.init(odataServer);
    }
    ODataRouter.prototype.init = function (odataServer) {
        this.router = express.Router();
        this.defineRoutes(odataServer);
    };
    ODataRouter.prototype.defineRoutes = function (odataServer) {
        this.router.get('/', function (req, res) {
            res.send('hello world');
        });
        odataServer.getModels().forEach(function (element, index, array) {
            console.log(element);
        });
    };
    ODataRouter.prototype.getRouter = function () {
        return this.router;
    };
    return ODataRouter;
})();
exports.ODataRouter = ODataRouter;
