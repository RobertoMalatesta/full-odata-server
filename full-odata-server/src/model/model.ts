import attr = require('./attribute');

export class Model {
    private name: string;
    private attributes: Array<attr.Attribute>;

    constructor(name: string) {
        this.name = name;
        this.attributes = new Array<attr.Attribute>();
    }

    getName(): string {
        return this.name;
    }

    getAttributes(): Array<attr.Attribute> {
        return this.attributes;
    }

    add(attribute: attr.Attribute): void {
        this.attributes.push(attribute);
    }
}