export default class Zoo {

    private name: string;

    constructor(name: string) {
        console.log("constructing...");
        this.name = name;
    }

    toString(): string {
        return this.name
    }
}