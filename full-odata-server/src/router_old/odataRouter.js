//import express = require('express');
//import odata = require('../index_old');
//export class ODataRouter {
//    private server: odata.ODataServer;
//    private router: express.Router;
//    constructor(odataServer: odata.ODataServer) {
//        this.init(odataServer);
//    }
//    private init(odataServer: odata.ODataServer) {
//        this.router = express.Router();
//        this.defineRoutes(odataServer);
//    }
//    private defineRoutes(odataServer: odata.ODataServer) {
//        this.router.get('/', function (req, res) {
//            res.send('hello world');
//        });
//        odataServer.getModels().forEach(function (element, index, array) {
//            console.log(element);
//        });
//    }
//    getRouter(): express.Router {
//        return this.router;
//    }
//} 
