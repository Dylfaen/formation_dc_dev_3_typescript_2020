import Animal from "./animal";

export default abstract class Canide extends Animal {

    abstract aboie(): void;

    griffer() {
        console.log(`${this.nom} griffe`)
    }

} 