/// <reference path="../def/mongoose.d.ts"/>
var mongoose = require('mongoose');
var MongoDB = (function () {
    function MongoDB(dbUrl) {
        this.dbUrl = dbUrl;
        this.mongoose = mongoose;
        this.mongoose.connect(this.dbUrl);
    }
    MongoDB.prototype.addSchemaFromModel = function (model) {
        var schema = {};
        for (var attr in model.attributes) {
            var attribute = model.attributes[attr];
            var type = { type: null, ref: null };
            if (attribute.ref) {
                type.type = this.naturalType('ObjectId');
                type.ref = attribute.ref;
            }
            if (attribute.type) {
                type.type = this.naturalType(attribute.type);
            }
            if (attribute.type === "Array") {
                schema[attribute.name] = [type];
            }
            else {
                schema[attribute.name] = type;
            }
        }
        var dbSchema = new mongoose.Schema(schema);
        var dbModel = this.mongoose.model(model.name, dbSchema);
        if (model.name === "Author") {
            dbModel.find({}, function (err, users) {
                var userMap = {};
                users.forEach(function (user) {
                    userMap[user._id.toHexString()] = user;
                });
                console.log(userMap);
            });
        }
        ;
    };
    MongoDB.prototype.naturalType = function (type) {
        switch (type) {
            case 'String':
                return String;
            case 'Date':
                return Date;
            case 'Number':
                return Number;
            case 'Boolean':
                return Boolean;
            case 'ObjectId':
                return mongoose.Schema.Types.ObjectId;
            case 'Array':
                return Array;
            default:
                {
                    return mongoose.Schema.Types[type];
                }
        }
    };
    return MongoDB;
})();
exports.MongoDB = MongoDB;
