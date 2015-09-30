import mongoose = require('mongoose');
import db = require('./db');

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

}