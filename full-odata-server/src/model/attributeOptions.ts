export class AttributeOptions {
    private type: string;
    private ref: string = null;

    constructor(type: string, ref?: string) {
        this.type = type;
        if (ref)
            this.ref = ref;
    }

    getType(): string {
        return this.type;
    }

    getRef(): string {
        return this.ref;
    }
}