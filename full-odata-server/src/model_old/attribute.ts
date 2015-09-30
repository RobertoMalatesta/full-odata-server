import t = require('./attributeType');

export class Attribute {
    private name: string;
    private type: t.AttributeType;

    constructor(name: string, type: t.AttributeType) {
        this.name = name;
        this.type = type;
    }
}