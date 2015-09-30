export class AttributeType {
    private type: string;
    private ref: string;

    constructor(type: string, ref: string) {
        if (ref) {
            this.type = type;
            this.ref = ref;
        } else {
            this.type = type;
        }
    }
}