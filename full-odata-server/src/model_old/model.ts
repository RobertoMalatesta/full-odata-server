import attr = require('./attribute');

export class Model {
    private name: string;
    private attributes: Array<any>;

    constructor(name: string, attributes) {
        this.name = name;
        this.initAttributes(attributes);
    }

    initAttributes(attributes) {
        this.attributes = [];
        for (var attribute in attributes) {
            this.attributes.push(new attr.Attribute(attribute, attributes[attribute]));
        }
    }
}