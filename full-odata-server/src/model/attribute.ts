import opt = require('./attributeOptions');

export class Attribute {
    private name: string;
    private options: opt.AttributeOptions;

    constructor(name: string, options: opt.AttributeOptions) {
        this.name = name;
        this.options = options;
    }

    getName(): string {
        return this.name;
    }

    getOptions(): opt.AttributeOptions {
        return this.options;
    }
}