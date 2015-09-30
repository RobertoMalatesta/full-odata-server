export class AttributeOptions {
    private type: string;
    private ref: string;

    constructor(type: string, ref?: string) {
        this.type = type;
        this.ref = ref;
    }

    getType(): string {
        return this.type;
    }

    getRef(): string {
        return this.ref;
    }
}