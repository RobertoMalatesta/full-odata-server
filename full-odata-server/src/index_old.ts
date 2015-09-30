import router = require('./router_old/odataRouter');
import mongodb = require('./db_old/mongodb');
import versions = require('./odata_old/odataversions');
import model = require('./model_old/model');

export class ODataServer {
    private db: mongodb.MongoDB;
    private odataVersion: versions.IODataVersion;
    private models: Array<model.Model>;
    private router: router.ODataRouter;

    constructor() {
        this.init();
    }

    private init() {
        this.models = [];
    }

    setVersion(version: number) {
        this.odataVersion = versions.ODataVersions.Create(version);
    }

    setMongoDb(dbUrl: string) {
        this.db = new mongodb.MongoDB(dbUrl);
    }

    addModel(name: string, attributes) {
        this.models.push(new model.Model(name, attributes));
    }

    getModels(): Array<model.Model> {
        return this.models;
    }

    getRouter() {
        this.router = new router.ODataRouter(this);
        return this.router.getRouter();
    }
}