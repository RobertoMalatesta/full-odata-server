import mongoose = require('mongoose');
import db = require('./db');
import util = require('../utils/converter');

import mod = require('../model/model');
import attr = require('../model/attribute');

export class MongoDb implements db.IDatabase {
    __impl = "IDatabase";
    private dbUrl: string;
    private mongoose: mongoose.Mongoose;

    setDBUrl(url: string): void {
        this.dbUrl = url;
    }

    getDBUrl(): string {
        return this.dbUrl;
    }

    connect(): void {
        this.mongoose = mongoose;
        this.mongoose.connect(this.getDBUrl());
    }

    convertToSchema(model: mod.Model): any {
        var schema = {};
        for (var a in model.getAttributes()) {
            var attribute: attr.Attribute = model.getAttributes()[a];
            
            var type = { type: null, ref: null };

            type.ref = attribute.getOptions().getRef();            
            if (attribute.getOptions().getType() === "Array") {
                type.type = util.convertNaturalType("ObjectId");
                schema[attribute.getName()] = [type];
            } else {
                type.type = util.convertNaturalType(attribute.getOptions().getType());
                schema[attribute.getName()] = type;
            }
        }
        return schema;
    }

}